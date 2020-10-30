import { View } from "dhx-optimus";

export class EmptyView extends View {
	init() {
		return `<div class="empty">This is ${this.params.content || "empty"} view</div>`;
	}
}
