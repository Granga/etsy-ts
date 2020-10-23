"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValue = void 0;
var client_1 = require("../client/client");
//methods class
var PropertyValue = /** @class */ (function () {
    function PropertyValue() {
    }
    /**
     * Get all of the attributes for a listing
     */
    PropertyValue.getAttributes = function (parameters, options) {
        return client_1.request("/listings/:listing_id/attributes", parameters, "GET", options);
    };
    /**
     * Get an attribute for a listing
     */
    PropertyValue.getAttribute = function (parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
    };
    /**
     * Update or populate an attribute for a listing
     */
    PropertyValue.updateAttribute = function (parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
    };
    /**
     * Delete an attribute for a listing
     */
    PropertyValue.deleteAttribute = function (parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
    };
    return PropertyValue;
}());
exports.PropertyValue = PropertyValue;
