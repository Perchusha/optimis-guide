import { View } from "dhx-optimus";

export class GridView extends View {
	init() {
		return new dhx.Grid(null, {
			columns: [
				{ id: "id", width: 50, header: [{ text: "Number" }] },
				{ id: "name", width: 400, header: [{ text: "Name" }] },
				{ id: "chartValue", width: 300, header: [{ text: "Value" }] },
				{ id: "color", width: 200, header: [{ text: "Color" }] }
			],
			autoWidth: true,
			data: this.params.dataCollection
		});
	}
}
