"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Creates a new ShippingTemplateEntry
 */
function createShippingTemplateEntry(parameters) {
    return httpClient_1.request("/shipping/templates/entries", parameters, "POST");
}
exports.createShippingTemplateEntry = createShippingTemplateEntry;
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
function getShippingTemplateEntry(parameters) {
    return httpClient_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET");
}
exports.getShippingTemplateEntry = getShippingTemplateEntry;
/**
 * Updates a ShippingTemplateEntry
 */
function updateShippingTemplateEntry(parameters) {
    return httpClient_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT");
}
exports.updateShippingTemplateEntry = updateShippingTemplateEntry;
/**
 * Deletes the ShippingTemplateEntry
 */
function deleteShippingTemplateEntry(parameters) {
    return httpClient_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE");
}
exports.deleteShippingTemplateEntry = deleteShippingTemplateEntry;
exports.ShippingTemplateEntry = {
    createShippingTemplateEntry: createShippingTemplateEntry,
    getShippingTemplateEntry: getShippingTemplateEntry,
    updateShippingTemplateEntry: updateShippingTemplateEntry,
    deleteShippingTemplateEntry: deleteShippingTemplateEntry
};
