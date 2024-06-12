QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
	"use strict";

	sap.ui.require(["pavel/kliuiko/test/unit/AllTests"], () => {
		QUnit.start();
	});
});
