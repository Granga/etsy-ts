"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Creates a new ShippingTemplateEntry
 */
function createShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries", parameters, "POST", options);
}
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
function getShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
}
/**
 * Updates a ShippingTemplateEntry
 */
function updateShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
}
/**
 * Deletes the ShippingTemplateEntry
 */
function deleteShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
}
exports.ShippingTemplateEntry = {
    createShippingTemplateEntry: createShippingTemplateEntry,
    getShippingTemplateEntry: getShippingTemplateEntry,
    updateShippingTemplateEntry: updateShippingTemplateEntry,
    deleteShippingTemplateEntry: deleteShippingTemplateEntry
};
