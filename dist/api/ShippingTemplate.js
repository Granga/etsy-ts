"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTemplate = void 0;
var client_1 = require("../client/client");
//methods class
var ShippingTemplate = /** @class */ (function () {
    function ShippingTemplate() {
    }
    /**
     * Creates a new ShippingTemplate
     */
    ShippingTemplate.createShippingTemplate = function (parameters, options) {
        return client_1.request("/shipping/templates", parameters, "POST", options);
    };
    /**
     * Retrieves a ShippingTemplate by id.
     */
    ShippingTemplate.getShippingTemplate = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id", parameters, "GET", options);
    };
    /**
     * Updates a ShippingTemplate
     */
    ShippingTemplate.updateShippingTemplate = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id", parameters, "PUT", options);
    };
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    ShippingTemplate.deleteShippingTemplate = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id", parameters, "DELETE", options);
    };
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    ShippingTemplate.findAllShippingTemplateEntries = function (parameters, options) {
        return client_1.request("/shipping/templates/:shipping_template_id/entries", parameters, "GET", options);
    };
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    ShippingTemplate.findAllUserShippingProfiles = function (parameters, options) {
        return client_1.request("/users/:user_id/shipping/templates", parameters, "GET", options);
    };
    return ShippingTemplate;
}());
exports.ShippingTemplate = ShippingTemplate;
