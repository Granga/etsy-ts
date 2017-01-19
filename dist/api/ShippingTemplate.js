"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Creates a new ShippingTemplate
 */
function createShippingTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates', 'POST');
}
exports.createShippingTemplate = createShippingTemplate;
/**
 * Retrieves a ShippingTemplate by id.
 */
function getShippingTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id', 'GET');
}
exports.getShippingTemplate = getShippingTemplate;
/**
 * Updates a ShippingTemplate
 */
function updateShippingTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id', 'PUT');
}
exports.updateShippingTemplate = updateShippingTemplate;
/**
 * Deletes the ShippingTemplate with the given id.
 */
function deleteShippingTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id', 'DELETE');
}
exports.deleteShippingTemplate = deleteShippingTemplate;
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
function findAllShippingTemplateEntries(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id/entries', 'GET');
}
exports.findAllShippingTemplateEntries = findAllShippingTemplateEntries;
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
function findAllUserShippingProfiles(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/shipping/templates', 'GET');
}
exports.findAllUserShippingProfiles = findAllUserShippingProfiles;
