import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
	init() {
		this.initUI();

		this.on("viewChange", id => {
			this.show(this.layout.getCell("content"), EmptyView, { content: id });
		})

		return this.layout;
	}

	initUI() {
		this.layout = new dhx.Layout(null, {
			rows: [
				{
					id: "toolbar",
					height: "content"
				},
				{
					id: "content"
				}
			]
		});

		this.show(this.layout.getCell("toolbar"), ToolbarView);
	}
}
