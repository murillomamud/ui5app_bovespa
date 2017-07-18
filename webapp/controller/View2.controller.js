sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("cloud.apiservicebovespabovespa.controller.View2", {

		onPressGoBack: function(evt) {
			//poderia passar também apenas o this
			var oRouter = UIComponent.getRouterFor(this.getView());
			
			//r2 é o nome da rota
			oRouter.navTo('default');
		}

	});

});