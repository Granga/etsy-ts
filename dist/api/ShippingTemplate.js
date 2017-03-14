"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Creates a new ShippingTemplate
 */
function createShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates", parameters, "POST", options);
}
/**
 * Retrieves a ShippingTemplate by id.
 */
function getShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "GET", options);
}
/**
 * Updates a ShippingTemplate
 */
function updateShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "PUT", options);
}
/**
 * Deletes the ShippingTemplate with the given id.
 */
function deleteShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "DELETE", options);
}
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
function findAllShippingTemplateEntries(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/entries", parameters, "GET", options);
}
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
function findAllUserShippingProfiles(parameters, options) {
    return client_1.request("/users/:user_id/shipping/templates", parameters, "GET", options);
}
exports.ShippingTemplate = {
    createShippingTemplate: createShippingTemplate,
    getShippingTemplate: getShippingTemplate,
    updateShippingTemplate: updateShippingTemplate,
    deleteShippingTemplate: deleteShippingTemplate,
    findAllShippingTemplateEntries: findAllShippingTemplateEntries,
    findAllUserShippingProfiles: findAllUserShippingProfiles
};
