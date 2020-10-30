import "./styles/main.scss";
import { App } from "dhx-optimus";
import Store from "./store/store";

import { TopLayout } from "./views/TopLayout";

const initialState = {
	name: "Optimus"
}

export class MyApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();
		this.show("", TopLayout);
	}
}
