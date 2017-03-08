"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get all of the attributes for a listing [developer preview - may be unstable]
*/
function getAttributes(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes", parameters, "GET", options);
}
/**
* Get an attribute for a listing [developer preview - may be unstable]
*/
function getAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
}
/**
* Update or populate an attribute for a listing [developer preview - may be unstable]
*/
function updateAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
}
/**
* Delete an attribute for a listing [developer preview - may be unstable]
*/
function deleteAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
}
exports.PropertyValue = { getAttributes: getAttributes, getAttribute: getAttribute, updateAttribute: updateAttribute, deleteAttribute: deleteAttribute };
