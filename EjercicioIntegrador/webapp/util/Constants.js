sap.ui.define([], function() {
    "user strict";
    return {
        model: {

            I18N: "i18n",

        },

        properties: {
            TOOLS_MODEL: {
                name: "/name"
            }
        },

        ids: {
            FRAGMENTS: {
                Display: "display",
                TablaProductos: "IdTablaProductos"
            }
        },

        routes: {
            secondary: "Secondary",
            main: "Main",
            JSON: {
                productos: "productos.json",
                search: "search.json"
            },
            FRAGMENTS: {
                Tabla: "EjercicioIntegrador.EjercicioIntegrador.Fragments.Tabla",
                Display: "EjercicioIntegrador.EjercicioIntegrador.Fragments.Display"
            }
        },
    };
}, true);