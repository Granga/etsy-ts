"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Add listing to a Treasury
*/
function addTreasuryListing(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/listings", parameters, "POST", options);
}
/**
* Remove listing from a Treasury
*/
function removeTreasuryListing(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
}
exports.TreasuryListing = { addTreasuryListing: addTreasuryListing, removeTreasuryListing: removeTreasuryListing };
