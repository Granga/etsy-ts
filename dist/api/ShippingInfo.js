"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingInfo = void 0;
var client_1 = require("../client/client");
//methods class
var ShippingInfo = /** @class */ (function () {
    function ShippingInfo() {
    }
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    ShippingInfo.findAllListingShippingProfileEntries = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/info", parameters, "GET", options);
    };
    /**
     * Creates a new ShippingInfo.
     */
    ShippingInfo.createShippingInfo = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/info", parameters, "POST", options);
    };
    /**
     * Retrieves a ShippingInfo by id.
     */
    ShippingInfo.getShippingInfo = function (parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "GET", options);
    };
    /**
     * Updates a ShippingInfo with the given id.
     */
    ShippingInfo.updateShippingInfo = function (parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "PUT", options);
    };
    /**
     * Deletes the ShippingInfo with the given id.
     */
    ShippingInfo.deleteShippingInfo = function (parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "DELETE", options);
    };
    return ShippingInfo;
}());
exports.ShippingInfo = ShippingInfo;
