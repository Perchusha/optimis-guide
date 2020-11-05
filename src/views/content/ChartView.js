import { View } from "dhx-optimus";
import { getChartStatistic } from "../../dataset";

export class ChartView extends View {
	init() {
		const chart = new dhx.Chart(null, {
			css: "chart",
			type: "donut",
			series: [
				{
					value: "value",
					color: "color",
					text: "post",
				},
			],
			legend: {
				values: {
					id: "id",
					text: "post",
					color: "color",
				},
				halign: "right",
				valign: "bottom",
			},
			data: getChartStatistic()
		});

		return chart;
	}
}
