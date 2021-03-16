sap.ui.define([
	"EjercicioIntegrador/EjercicioIntegrador/util/Constants"
    ],	
    function (Constants) {
		"use strict";
		return  {

    formatPeso: function(fPeso) {
        fPeso = parseFloat(fPeso);
        
        if(!fPeso) {
            return;
        } else {
            if(fPeso < 1) {
                return "Success"
        } else if (fPeso >= 1 && fPeso <= 2) {
            return "Warning"
        } else {
            return "Error"
        }
        }
    },
    formatPrecio: function (fPrecio) {
        fPrecio = parseFloat(fPrecio)    
        if (!fPrecio) {
                return;
            }
            return fPrecio/160;
            }
    }
}, true);
