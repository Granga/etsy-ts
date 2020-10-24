"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTemplateEntry = void 0;
var client_1 = require("../client/client");
//methods class
var ShippingTemplateEntry = /** @class */ (function () {
    function ShippingTemplateEntry() {
    }
    /**
     * Creates a new ShippingTemplateEntry
     */
    ShippingTemplateEntry.createShippingTemplateEntry = function (parameters, options) {
        return client_1.request("/shipping/templates/entries", parameters, "POST", options);
    };
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    ShippingTemplateEntry.getShippingTemplateEntry = function (parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
    };
    /**
     * Updates a ShippingTemplateEntry
     */
    ShippingTemplateEntry.updateShippingTemplateEntry = function (parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
    };
    /**
     * Deletes the ShippingTemplateEntry
     */
    ShippingTemplateEntry.deleteShippingTemplateEntry = function (parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
    };
    return ShippingTemplateEntry;
}());
exports.ShippingTemplateEntry = ShippingTemplateEntry;
