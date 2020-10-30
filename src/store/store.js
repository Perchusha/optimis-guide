function isDhxDataCollection(obj) {
	return typeof obj.config === "object" && typeof obj.parse === "function";
}

export default class Store {
	constructor(state) {
		this._handlers = {};
		this._state = this._proxyfyRecursive(state, "");
	}

	observe(pathEvaluator, handler) {
		const path = this._evaluatePath(pathEvaluator);
		if (!this._handlers[path]) {
			this._handlers[path] = [];
		}
		this._handlers[path].push(handler);
		handler(pathEvaluator(this._state), this._state);
	}

	unobserve(pathEvaluator, handler) {
		const path = this._evaluatePath(pathEvaluator);
		if (this._handlers[path]) {
			this._handlers[path].splice(this._handlers[path].indexOf(handler), 1);
		}
	}

	getState() {
		return this._state;
	}

	_evaluatePath(evaluator) {
		this._pathAccumulator = [];
		evaluator(this._state);
		const path = this._pathAccumulator.join(".");
		this._pathAccumulator = null;
		return path;
	}

	_getNextPath(path, key) {
		return `${(path && `${path}.`) || ""}${key}`;
	}

	_proxyfyRecursive(obj, path) {
		if (
			obj !== null &&
			!obj.__isProxy &&
			typeof obj === "object" &&
			!(obj instanceof Date) &&
			!isDhxDataCollection(obj)
		) {
			if (!Array.isArray(obj)) {
				for (const key in obj) {
					obj[key] = this._proxyfyRecursive(
						obj[key],
						this._getNextPath(path, key)
					);
				}
			}
			return this._proxyfy(obj, path);
		}
		return obj;
	}

	_proxyfy(obj, path) {
		return new Proxy(obj, {
			get: function (target, key, _) {
				if (this._pathAccumulator) {
					this._pathAccumulator.push(key);
				}
				if (key === "__isProxy") {
					return true;
				}
				if (typeof target[key] === "function") {
					return target[key].bind(target);
				}
				return target[key];
			}.bind(this),
			set: function (target, key, value) {
				try {
					target[key] = value;
					const fullPath = this._getNextPath(path, key);
					if (Array.isArray(target)) {
						if (key === "length") {
							this._notifyChange(path, target);
							this._proxyfyRecursive(target, path);
						}
						return true;
					}
					target[key] = this._proxyfyRecursive(value, fullPath);
					this._notifyChange(fullPath, value);
					return true;
				} catch (e) {
					console.error(e);
					return false;
				}
			}.bind(this)
		});
	}

	_notifyChange(path, value) {
		const handlers = this._handlers[path];
		if (handlers) {
			handlers.forEach((handler) => {
				handler(value, this._state);
			});
			Object.keys(this._handlers)
				.filter((k) => k.indexOf(`${path}.`) === 0)
				.forEach((k) =>
					this._handlers[k].forEach((h) => h(this._getPathValue(k)))
				);
		}
	}

	_getPathSections(path) {
		return path.split(".");
	}

	_getPathValue(path) {
		return this._getPathSections(path).reduce(
			(acc, cur) => (acc && acc[cur]) || undefined,
			this._state
		);
	}
}
