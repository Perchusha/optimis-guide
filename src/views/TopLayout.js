import { View } from "dhx-optimus";

export class TopLayout extends View {
	init() {
		return `<h1 style="margin: 100px; text-align: center;">Hello ${this.app.state.name}!</h1>`;
	}
}
