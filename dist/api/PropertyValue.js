"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get all of the attributes for a listing [developer preview - may be unstable]
 */
function getAttributes(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/attributes', 'GET');
}
exports.getAttributes = getAttributes;
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
function getAttribute(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/attributes/:property_id', 'GET');
}
exports.getAttribute = getAttribute;
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
function updateAttribute(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/attributes/:property_id', 'PUT');
}
exports.updateAttribute = updateAttribute;
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
function deleteAttribute(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/attributes/:property_id', 'DELETE');
}
exports.deleteAttribute = deleteAttribute;
