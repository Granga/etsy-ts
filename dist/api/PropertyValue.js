"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get all of the attributes for a listing [developer preview - may be unstable]
 */
function getAttributes(parameters) {
    return httpClient_1.request("/listings/:listing_id/attributes", parameters, "GET");
}
exports.getAttributes = getAttributes;
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
function getAttribute(parameters) {
    return httpClient_1.request("/listings/:listing_id/attributes/:property_id", parameters, "GET");
}
exports.getAttribute = getAttribute;
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
function updateAttribute(parameters) {
    return httpClient_1.request("/listings/:listing_id/attributes/:property_id", parameters, "PUT");
}
exports.updateAttribute = updateAttribute;
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
function deleteAttribute(parameters) {
    return httpClient_1.request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE");
}
exports.deleteAttribute = deleteAttribute;
exports.PropertyValue = {
    getAttributes: getAttributes,
    getAttribute: getAttribute,
    updateAttribute: updateAttribute,
    deleteAttribute: deleteAttribute
};
