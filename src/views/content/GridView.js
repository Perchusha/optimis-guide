import { View } from "dhx-optimus";

export class GridView extends View {
	init() {
		return new dhx.Grid(null, {
			columns: [
				{ id: "name", width: 400, header: [{ text: "Name" }] },
				{ id: "post", width: 300, header: [{ text: "Post" }] },
				{ id: "phone", width: 300, header: [{ text: "Phone" }] },
				{ id: "mail", width: 300, header: [{ text: "Mail" }] },
				{ id: "birthday", width: 200, header: [{ text: "Birthday" }], type: "date" },
				{ id: "start", width: 300, header: [{ text: "Start" }], type: "date" }
			],
			autoWidth: true,
			data: this.params.dataCollection
		});
	}
}
