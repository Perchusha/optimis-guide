import "./styles/main.scss";
import { App } from "dhx-optimus";
import Store from "./store/store";

import { TopLayout } from "./views/TopLayout";
import { dataCollection } from "./dataset";

const initialState = {
	active: "first",
	data: dataCollection
}

export class MyApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();

		this.subscribe();

		this.show("", TopLayout);
	}

	subscribe() {
		this.on("viewChange", id => {
			this.state.active = id;
		})
	}
}
