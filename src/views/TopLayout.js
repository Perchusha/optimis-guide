import { View } from "dhx-optimus";

export class TopLayout extends View {
	init() {
		this._initUI();
		return this.layout;
	}

	_initUI() {
		this.layout = new dhx.Layout(null, {
			type: "line",
			cols: [
				{ html: `<h3 style="padding-left: 20px;">Hello ${this.app.state.name}!</h3>` },
			]
		});
	}
}
