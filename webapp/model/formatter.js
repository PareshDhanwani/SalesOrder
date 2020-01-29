sap.ui.define([
                "sap/ui/core/format/NumberFormat"
                ], function(NumberFormat){
                "use strict";
                return {
                                delivery: function(price){
                                                var numberFormat = NumberFormat.getFloatInstance({
                                                                formatOptions: {
                                                                                style: "short",
                                                                                shortDecimals: 1
                                                                }
                                                });
                                                // var numberFormat = NumberFormat.getFloatInstance({maxFractionDigits:1});
                                                return numberFormat.format(price / 1000) + "K";
                                                // return text;
                                                // var sResult= "";
                                                // if (price ==="K"){
                                                //            price = price * 1000;
                                                // }
                                                // return sResult;
                                }
                };
}
);
