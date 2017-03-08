"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Add listing to a Treasury
 */
function addTreasuryListing(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key/listings", parameters, "POST");
}
exports.addTreasuryListing = addTreasuryListing;
/**
 * Remove listing from a Treasury
 */
function removeTreasuryListing(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE");
}
exports.removeTreasuryListing = removeTreasuryListing;
exports.TreasuryListing = {addTreasuryListing: addTreasuryListing, removeTreasuryListing: removeTreasuryListing};
