"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
function findAllListingShippingProfileEntries(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/info", parameters, "GET");
}
exports.findAllListingShippingProfileEntries = findAllListingShippingProfileEntries;
/**
 * Creates a new ShippingInfo.
 */
function createShippingInfo(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/info", parameters, "POST");
}
exports.createShippingInfo = createShippingInfo;
/**
 * Retrieves a ShippingInfo by id.
 */
function getShippingInfo(parameters) {
    return httpClient_1.request("/shipping/info/:shipping_info_id", parameters, "GET");
}
exports.getShippingInfo = getShippingInfo;
/**
 * Updates a ShippingInfo with the given id.
 */
function updateShippingInfo(parameters) {
    return httpClient_1.request("/shipping/info/:shipping_info_id", parameters, "PUT");
}
exports.updateShippingInfo = updateShippingInfo;
/**
 * Deletes the ShippingInfo with the given id.
 */
function deleteShippingInfo(parameters) {
    return httpClient_1.request("/shipping/info/:shipping_info_id", parameters, "DELETE");
}
exports.deleteShippingInfo = deleteShippingInfo;
exports.ShippingInfo = {
    findAllListingShippingProfileEntries: findAllListingShippingProfileEntries,
    createShippingInfo: createShippingInfo,
    getShippingInfo: getShippingInfo,
    updateShippingInfo: updateShippingInfo,
    deleteShippingInfo: deleteShippingInfo
};
