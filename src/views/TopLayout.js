import { View } from "dhx-optimus";

export class TopLayout extends View {
	init() {
		return `<h3 style="padding: 20px; margin: 0;">Hello ${this.app.state.name}!</h3>`;
	}
}
