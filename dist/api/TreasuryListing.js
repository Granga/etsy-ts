"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Add listing to a Treasury
*/
function addTreasuryListing(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key/listings', 'POST');
}
exports.addTreasuryListing = addTreasuryListing;
/**
* Remove listing from a Treasury
*/
function removeTreasuryListing(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key/listings/:listing_id', 'DELETE');
}
exports.removeTreasuryListing = removeTreasuryListing;
