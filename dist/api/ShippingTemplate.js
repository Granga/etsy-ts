"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Creates a new ShippingTemplate
 */
function createShippingTemplate(parameters) {
    return httpClient_1.request("/shipping/templates", parameters, "POST");
}
exports.createShippingTemplate = createShippingTemplate;
/**
 * Retrieves a ShippingTemplate by id.
 */
function getShippingTemplate(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id", parameters, "GET");
}
exports.getShippingTemplate = getShippingTemplate;
/**
 * Updates a ShippingTemplate
 */
function updateShippingTemplate(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id", parameters, "PUT");
}
exports.updateShippingTemplate = updateShippingTemplate;
/**
 * Deletes the ShippingTemplate with the given id.
 */
function deleteShippingTemplate(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id", parameters, "DELETE");
}
exports.deleteShippingTemplate = deleteShippingTemplate;
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
function findAllShippingTemplateEntries(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id/entries", parameters, "GET");
}
exports.findAllShippingTemplateEntries = findAllShippingTemplateEntries;
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
function findAllUserShippingProfiles(parameters) {
    return httpClient_1.request("/users/:user_id/shipping/templates", parameters, "GET");
}
exports.findAllUserShippingProfiles = findAllUserShippingProfiles;
exports.ShippingTemplate = {
    createShippingTemplate: createShippingTemplate,
    getShippingTemplate: getShippingTemplate,
    updateShippingTemplate: updateShippingTemplate,
    deleteShippingTemplate: deleteShippingTemplate,
    findAllShippingTemplateEntries: findAllShippingTemplateEntries,
    findAllUserShippingProfiles: findAllUserShippingProfiles
};
