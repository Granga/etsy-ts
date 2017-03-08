"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
function getBuyerTaxonomy(parameters) {
    return httpClient_1.request("/taxonomy/buyer/get", parameters, "GET");
}
exports.getBuyerTaxonomy = getBuyerTaxonomy;
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
function getSellerTaxonomy(parameters) {
    return httpClient_1.request("/taxonomy/seller/get", parameters, "GET");
}
exports.getSellerTaxonomy = getSellerTaxonomy;
exports.Taxonomy = {getBuyerTaxonomy: getBuyerTaxonomy, getSellerTaxonomy: getSellerTaxonomy};
