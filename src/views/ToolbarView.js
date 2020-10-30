import { View } from "dhx-optimus";

export class ToolbarView extends View {
	init() {
		const toolbar = new dhx.Toolbar(null, {
			css: "toolbar",
			data: [
				{
					type: "spacer"
				},
				{
					id: "first",
					value: "First",
					group: "views"
				},
				{
					id: "second",
					value: "Second",
					group: "views"
				},
				{
					id: "third",
					value: "Third",
					group: "views"
				},
				{
					type: "spacer"
				}
			]
		});

		toolbar.events.on("click", id => {
			this.fire("viewChange", [id]);
		})

		return toolbar;
	}
}
