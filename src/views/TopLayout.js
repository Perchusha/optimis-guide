import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
	init() {
		this.initUI();

		this.observe(state => state.active, active => {
			this.show(this.layout.getCell("content"), EmptyView, { content: active });
		})

		return this.layout;
	}

	initUI() {
		this.layout = new dhx.Layout(null, {
			rows: [
				{
					id: "toolbar",
					gravity: false
				},
				{
					id: "content"
				}
			]
		});

		this.show(this.layout.getCell("toolbar"), ToolbarView, { active: this.app.state.active });
	}
}
