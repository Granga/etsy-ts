"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieves a set of ShippingProfileEntries objects associated to a Listing.
*/
function findAllListingShippingProfileEntries(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/info", parameters, "GET", options);
}
/**
* Creates a new ShippingInfo.
*/
function createShippingInfo(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/info", parameters, "POST", options);
}
/**
* Retrieves a ShippingInfo by id.
*/
function getShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "GET", options);
}
/**
* Updates a ShippingInfo with the given id.
*/
function updateShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "PUT", options);
}
/**
* Deletes the ShippingInfo with the given id.
*/
function deleteShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "DELETE", options);
}
exports.ShippingInfo = { findAllListingShippingProfileEntries: findAllListingShippingProfileEntries, createShippingInfo: createShippingInfo, getShippingInfo: getShippingInfo, updateShippingInfo: updateShippingInfo, deleteShippingInfo: deleteShippingInfo };
