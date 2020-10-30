import { View } from "dhx-optimus";

export class TopLayout extends View {
	init() {
		return `<h3 style="padding-left: 20px;">Hello ${this.app.state.name}!</h3>`;
	}
}
