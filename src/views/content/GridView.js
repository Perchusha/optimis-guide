import { View } from "dhx-optimus";
import { emptyItem } from "../../helpers/data";

export class GridView extends View {
	init() {
		const postUniq = this.params.dataCollection.map(item => {
			return item.post;
		}).filter((value, index, self) => {
			return self.indexOf(value) === index;
		});

		const grid = new dhx.Grid(null, {
			columns: [
				{ id: "name", width: 400, header: [{ text: "Name" }] },
				{ id: "post", width: 300, header: [{ text: "Post" }], editorType: "select", options: postUniq },
				{ id: "phone", width: 300, header: [{ text: "Phone" }] },
				{ id: "mail", width: 300, header: [{ text: "Mail" }] },
				{ id: "birthday", width: 200, header: [{ text: "Birthday" }], type: "date", dateFormat: "%d.%m.%Y" },
				{ id: "start", width: 300, header: [{ text: "Start" }], type: "date", dateFormat: "%d.%m.%Y" }
			],
			autoWidth: true,
			selection: "row",
			editable: true,
			data: this.params.dataCollection
		});

		this.app.events.on("removeItem", () => {
			const selected = grid.selection.getCell()
			if (selected) {
				grid.data.remove(selected.row.id);
			}
		})

		this.app.events.on("addItem", () => {
			const selected = grid.selection.getCell()
			if (selected) {
				grid.data.add({ emptyItem }, grid.data.getIndex(selected.row.id) + 1);
			} else {
				grid.data.add({ emptyItem }, 0);
			}
		})

		return grid
	}
}
