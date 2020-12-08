import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { DataView } from "./content/DataView";
import { ChartView } from "./content/ChartView";
import { GridView } from "./content/GridView";

export class TopLayout extends View {
	init() {
		this.initUI();

		this.observe(state => state.active, active => {
			switch (active) {
				case "first":
					this.show(this.layout.getCell("content"), DataView, { dataCollection: this.app.state.data });
					break;
				case "second":
					this.show(this.layout.getCell("content"), ChartView, { dataCollection: this.app.state.data });
					break;
				case "third":
					this.show(this.layout.getCell("content"), GridView, { dataCollection: this.app.state.data });
					break;
			}
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

		this.show(this.layout.getCell("toolbar"), ToolbarView, { active: this.app.state.active });
	}
}
