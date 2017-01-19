"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
function findAllListingShippingProfileEntries(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/info', 'GET');
}
exports.findAllListingShippingProfileEntries = findAllListingShippingProfileEntries;
/**
 * Creates a new ShippingInfo.
 */
function createShippingInfo(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/info', 'POST');
}
exports.createShippingInfo = createShippingInfo;
/**
 * Retrieves a ShippingInfo by id.
 */
function getShippingInfo(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/info/:shipping_info_id', 'GET');
}
exports.getShippingInfo = getShippingInfo;
/**
 * Updates a ShippingInfo with the given id.
 */
function updateShippingInfo(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/info/:shipping_info_id', 'PUT');
}
exports.updateShippingInfo = updateShippingInfo;
/**
 * Deletes the ShippingInfo with the given id.
 */
function deleteShippingInfo(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/info/:shipping_info_id', 'DELETE');
}
exports.deleteShippingInfo = deleteShippingInfo;
