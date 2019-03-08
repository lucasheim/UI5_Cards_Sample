sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("card-blog.Sample.controller.Dashboard", {
		onInit: function() {
			var cardManifests = new JSONModel();

			cardManifests.loadData(sap.ui.require.toUrl("card-blog/Sample/model/cardsManifest.json"));
			this.getView().setModel(cardManifests, "manifests");
		}
	});
});