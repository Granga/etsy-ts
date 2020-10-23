"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingUpgrade = void 0;
var client_1 = require("../client/client");
//methods class
var ShippingUpgrade = /** @class */ (function () {
    function ShippingUpgrade() {
    }
    /**
     * Get the shipping upgrades available for a listing.
     */
    ShippingUpgrade.getListingShippingUpgrades = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "GET", options);
    };
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.createListingShippingUpgrade = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "POST", options);
    };
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.updateListingShippingUpgrade = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "PUT", options);
    };
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.deleteListingShippingUpgrade = function (parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "DELETE", options);
    };
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    ShippingUpgrade.findAllShippingTemplateUpgrades = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET", options);
    };
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.createShippingTemplateUpgrade = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST", options);
    };
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.updateShippingTemplateUpgrade = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT", options);
    };
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.deleteShippingTemplateUpgrade = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE", options);
    };
    return ShippingUpgrade;
}());
exports.ShippingUpgrade = ShippingUpgrade;
