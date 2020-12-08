import { View } from "dhx-optimus";

export class DataView extends View {
	init() {
		function template(data) {
			let template = '<div class="personal-card">';
			template += '<div class="personal-card__container">';
			template += '<h3>' + data.name + '</h3>';
			template += '<p>' + data.post + '</p></div></div>';
			return template;
		}

		return new dhx.DataView(null, {
			data: this.params.dataCollection,
			itemsInRow: 2,
			gap: 20,
			template
		});
	}
}
