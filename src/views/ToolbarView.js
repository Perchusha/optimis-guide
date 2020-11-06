import { View } from "dhx-optimus";

export class ToolbarView extends View {
	init() {
		const toolbar = this.toolbar = new dhx.Toolbar(null, {
			css: "toolbar",
			data: [
				{
					type: "title",
					value: "DHTMLX Optimus Started Demo"
				},
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
				},
				{
					id: "remove",
					icon: "dxi dxi-delete",
					circle: true,
				},
				{
					id: "add",
					icon: "dxi dxi-plus",
					circle: true,
				}
			]
		});

		this.actionButtons = ["remove", "add"];

		this.observe(state => state.active, active => {
			if (active === "second") {
				this.hideActionButtons();
			} else {
				this.showActionButtons();
			}
			toolbar.data.update(active, { active: true });
		})

		toolbar.events.on("click", id => {
			switch (id) {
				case "first":
				case "second":
				case "third":
					this.fire("viewChange", [id]);
					break;
				case "remove":
					this.fire("removeItem", []);
					break;
				case "add":
					this.fire("addItem", []);
					break;
			}
		})

		return toolbar;
	}

	hideActionButtons() {
		this.actionButtons.forEach(item => {
			if (!this.toolbar.isDisabled(item)) {
				this.toolbar.disable(item);
			}
		});
	}

	showActionButtons() {
		this.actionButtons.forEach(item => {
			if (this.toolbar.isDisabled(item)) {
				this.toolbar.enable(item);
			}
		});
	}
}
