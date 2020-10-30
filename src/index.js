import "./styles/main.scss";
import { App } from "dhx-optimus";
import { TopLayout } from "./views/TopLayout";
import Store from "./store/store";

const initialState = {
	name: "Bob"
}

export class MyApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();
		this.show("", TopLayout);
	}
}
