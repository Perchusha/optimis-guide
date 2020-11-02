import { View } from "dhx-optimus";

export class ChartView extends View {
	init() {
		return new dhx.Chart(null, {
			css: "chart",
			type: "pie",
			series: [
				{
					value: "chartValue",
					color: "color",
					stroke: "#FFFFFF",
					strokeWidth: 2,
					showText: true
				}
			],
			data: this.params.dataCollection
		});
	}
}
