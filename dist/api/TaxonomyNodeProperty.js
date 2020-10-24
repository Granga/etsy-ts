"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomyNodeProperty = void 0;
var client_1 = require("../client/client");
//methods class
var TaxonomyNodeProperty = /** @class */ (function () {
    function TaxonomyNodeProperty() {
    }
    /**
     * Get the possible properties of a taxonomy node
     */
    TaxonomyNodeProperty.getTaxonomyNodeProperties = function (parameters, options) {
        return client_1.request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
    };
    return TaxonomyNodeProperty;
}());
exports.TaxonomyNodeProperty = TaxonomyNodeProperty;
