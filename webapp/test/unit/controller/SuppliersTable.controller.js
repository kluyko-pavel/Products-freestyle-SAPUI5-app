sap.ui.define(
	["pavel/kliuiko/controller/SuppliersTable.controller"],
	function (SuppliersTableController) {
		"use strict";

		QUnit.module("Suppliers table controller tests", {
			beforeEach: function () {
				this.oController = new SuppliersTableController();
			},
			afterEach: function () {
				this.oController.destroy();
			},
		});

		QUnit.test("Test list report filters clear method", function (assert) {
			assert.ok(
				this.oController.onFiltersClear,
				"Your assertion message"
			);
		});
	}
);
