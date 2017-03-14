"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
function getBuyerTaxonomy(parameters, options) {
    return client_1.request("/taxonomy/buyer/get", parameters, "GET", options);
}
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
function getSellerTaxonomy(parameters, options) {
    return client_1.request("/taxonomy/seller/get", parameters, "GET", options);
}
exports.Taxonomy = { getBuyerTaxonomy: getBuyerTaxonomy, getSellerTaxonomy: getSellerTaxonomy };
