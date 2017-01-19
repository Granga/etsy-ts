"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieve the entire taxonomy as seen by buyers in search.
*/
function getBuyerTaxonomy(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/buyer/get', 'GET');
}
exports.getBuyerTaxonomy = getBuyerTaxonomy;
/**
* Retrieve the entire taxonomy as used by sellers in the listing process.
*/
function getSellerTaxonomy(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/seller/get', 'GET');
}
exports.getSellerTaxonomy = getSellerTaxonomy;
