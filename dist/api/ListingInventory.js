"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get the inventory for a listing [developer preview - may be unstable]
 */
function getInventory(parameters) {
    return httpClient_1.request("/listings/:listing_id/inventory", parameters, "GET");
}
exports.getInventory = getInventory;
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
function updateInventory(parameters) {
    return httpClient_1.request("/listings/:listing_id/inventory", parameters, "PUT");
}
exports.updateInventory = updateInventory;
exports.ListingInventory = {getInventory: getInventory, updateInventory: updateInventory};
