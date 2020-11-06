import { View } from "dhx-optimus";
import { emptyItem } from "../../helpers/data";

export class DataView extends View {
	init() {
		function template(data) {
			let template = '<div class="personal-card">';
			template += '<div class="personal-card__container">';
			template += '<h3>' + data.name + '</h3>';
			template += '<p>' + data.post + '</p></div></div>';
			return template;
		}

		const dataView = new dhx.DataView(null, {
			keyNavigation: true,
			data: this.params.dataCollection,
			itemsInRow: 2,
			gap: 20,
			template: template
		});


		this.app.events.on("removeItem", () => {
			const selected = dataView.selection.getItem()
			if (selected) {
				dataView.data.remove(selected.row.id);
			}
		})

		this.app.events.on("addItem", () => {
			const selected = dataView.selection.getItem()
			if (selected) {
				dataView.data.add({ emptyItem }, dataView.data.getIndex(selected.row.id) + 1);
			} else {
				dataView.data.add({ emptyItem }, 0);
			}
		})

		return dataView;
	}
}
