sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.BSP11.controller.POINF", {
			onInit: function () {
               this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			}
		});
	});
