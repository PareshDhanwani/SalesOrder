sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageToast",
	"../model/formatter"
], function (Controller,JSONModel,Filter,MessageToast,formatter) {
	"use strict";

	return Controller.extend("poc2.Poc2.controller.View1", {
		formatter:formatter,
		onInit: function () {
			
			
			//var oModel=this.getView().getModel();
			//MessageToast.show(parseInt(oModel.getProperty("/products/0/items/0/quantity")));
			/*var price=0;
			for(var i=0;i<oModel.getData().products.length;i++){
				for(var j=0;j<oModel.getData().products[i].items.length;j++){
					price=price+parseInt(oModel.getProperty("/products/"+i+"/items/"+j+"/quantity"))*parseInt(oModel.getProperty("/products/"+i+"/items/"+j+"/yourprice"));
				}*/
				
				//price=oModel.getProperty("products/"+i+"/price");
				
				/*if(price>=1000){
				price=price/1000;
				price=price+"K";
				MessageToast.show(price);
			}
			this.getView().byId("ol").setNumber(price);*/
		//	price=0;
		//	}
		//	MessageToast.show(price);
			
		},
		onListItemPress: function(oEvent){
			/*var selectedProductName = oEvent.getSource().getBindingContext().getProperty("name");
			var selectedProductPrice = oEvent.getSource().getBindingContext().getProperty("price");
			var selectedProductCurrencyCode = oEvent.getSource().getBindingContext().getProperty("currencycode");
			var selectedProductDetail = oEvent.getSource().getBindingContext().getProperty("text");
			var selectedProductAddress = oEvent.getSource().getBindingContext().getProperty("address");
			var selectedProductOrder = oEvent.getSource().getBindingContext().getProperty("orderon");
			var selectedProductRequest = oEvent.getSource().getBindingContext().getProperty("requeston");
			this.getView().byId("detailPage").setTitle(selectedProductName);
			this.getView().byId("detailPage").setNumber(selectedProductPrice);
			this.getView().byId("detailPage").setNumberUnit(selectedProductCurrencyCode);
			this.getView().byId("textAttribute").setText(selectedProductDetail);
			this.getView().byId("addressAttribute").setText(selectedProductAddress);
			this.getView().byId("order").setText("Ordered: "+selectedProductOrder);
			this.getView().byId("request").setText("Requested: "+selectedProductRequest);*/
			var path=oEvent.getSource().getBindingContext().getPath();
			var index=parseInt(path.substring(10,11));
			var data=this.getView().getModel().getData();
			var count=data.products[index].items.length;
				
			this.getView().byId("tableTitle").setText("Items ("+count+")");
			//	this.getView().byId("idProductsTable").bindElement(oEvent.getSource().getBindingContext()+"/items/0");	
			this.getView().byId("dp").bindElement(oEvent.getSource().getBindingContext().getPath());
			this.getView().byId("idProductsTable").setVisible(true);
			this.getView().byId("order").setVisible(true);
			this.getView().byId("request").setVisible(true);
			
		},
		onSearch : function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("idList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		}
	});
});