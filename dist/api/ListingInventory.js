"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get the inventory for a listing [developer preview - may be unstable]
*/
function getInventory(parameters, options) {
    return client_1.request("/listings/:listing_id/inventory", parameters, "GET", options);
}
/**
* Update the inventory for a listing [developer preview - may be unstable]
*/
function updateInventory(parameters, options) {
    return client_1.request("/listings/:listing_id/inventory", parameters, "PUT", options);
}
exports.ListingInventory = { getInventory: getInventory, updateInventory: updateInventory };
