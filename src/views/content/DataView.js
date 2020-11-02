import { View } from "dhx-optimus";

export class DataView extends View {
	init() {
		return new dhx.DataView(null, {
			data: this.params.dataCollection,
			itemsInRow: 2,
			gap: 20,
			template: item => `<span style="color: ${item.color}">${item.value}</span>`
		});
	}
}
