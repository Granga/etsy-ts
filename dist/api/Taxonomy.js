"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxonomy = void 0;
var client_1 = require("../client/client");
//methods class
var Taxonomy = /** @class */ (function () {
    function Taxonomy() {
    }
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    Taxonomy.getBuyerTaxonomy = function (parameters, options) {
        return client_1.request("/taxonomy/buyer/get", parameters, "GET", options);
    };
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    Taxonomy.getSellerTaxonomy = function (parameters, options) {
        return client_1.request("/taxonomy/seller/get", parameters, "GET", options);
    };
    /**
     * Get the current version of the seller taxonomy
     */
    Taxonomy.getSellerTaxonomyVersion = function (parameters, options) {
        return client_1.request("/taxonomy/seller/version", parameters, "GET", options);
    };
    return Taxonomy;
}());
exports.Taxonomy = Taxonomy;
