sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(Controller, UIComponent, JSONModel) {
	"use strict";

	return Controller.extend("cloud.apiservicebovespabovespa.controller.View1", {
		onPressGraf : function(evt){
			//poderia passar também apenas o this
			var oRouter = UIComponent.getRouterFor(this.getView());
			
			//r2 é o nome da rota
			oRouter.navTo('t2');
		},

		handleRefresh : function(evt){
			var pull = evt.getSource();	
			var oComponent = this.getOwnerComponent();

			var sUrl = "https://afternoon-journey-55257.herokuapp.com/";
			var oModel = new JSONModel(sUrl);
			oComponent.setModel(oModel); //this neste caso é o component					

			setTimeout(function(){
				pull.hide();
			},1000)
		}


	});
});