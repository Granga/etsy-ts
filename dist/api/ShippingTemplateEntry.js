"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Creates a new ShippingTemplateEntry
 */
function createShippingTemplateEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/entries', 'POST');
}
exports.createShippingTemplateEntry = createShippingTemplateEntry;
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
function getShippingTemplateEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'GET');
}
exports.getShippingTemplateEntry = getShippingTemplateEntry;
/**
 * Updates a ShippingTemplateEntry
 */
function updateShippingTemplateEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'PUT');
}
exports.updateShippingTemplateEntry = updateShippingTemplateEntry;
/**
 * Deletes the ShippingTemplateEntry
 */
function deleteShippingTemplateEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'DELETE');
}
exports.deleteShippingTemplateEntry = deleteShippingTemplateEntry;
