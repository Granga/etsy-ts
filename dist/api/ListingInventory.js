"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get the inventory for a listing [developer preview - may be unstable]
 */
function getInventory(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/inventory', 'GET');
}
exports.getInventory = getInventory;
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
function updateInventory(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/inventory', 'PUT');
}
exports.updateInventory = updateInventory;
