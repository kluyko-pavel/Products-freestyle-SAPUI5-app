sap.ui.define([], () => {
	"use strict";

	return {
		/**
		 * Format suppliers table title.
		 *
		 * @param {number} iSuppliersCount suppliers count.
		 * @returns {string} formatted title.
		 *
		 */
		formatSuppliersTableTitle: function (iSuppliersCount) {
			const oBundle = this.getOwnerComponent()
				.getModel("i18n")
				.getResourceBundle();
			return iSuppliersCount
				? oBundle.getText("SuppliersTableTitle", `(${iSuppliersCount})`)
				: oBundle.getText("SuppliersTableTitle", " ");
		},
	};
});
