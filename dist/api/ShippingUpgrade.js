"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get the shipping upgrades available for a listing.
 */
function getListingShippingUpgrades(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/upgrades', 'GET');
}
exports.getListingShippingUpgrades = getListingShippingUpgrades;
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function createListingShippingUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/upgrades', 'POST');
}
exports.createListingShippingUpgrade = createListingShippingUpgrade;
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function updateListingShippingUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/upgrades', 'PUT');
}
exports.updateListingShippingUpgrade = updateListingShippingUpgrade;
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function deleteListingShippingUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/shipping/upgrades', 'DELETE');
}
exports.deleteListingShippingUpgrade = deleteListingShippingUpgrade;
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
function findAllShippingTemplateUpgrades(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'GET');
}
exports.findAllShippingTemplateUpgrades = findAllShippingTemplateUpgrades;
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function createShippingTemplateUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'POST');
}
exports.createShippingTemplateUpgrade = createShippingTemplateUpgrade;
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function updateShippingTemplateUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'PUT');
}
exports.updateShippingTemplateUpgrade = updateShippingTemplateUpgrade;
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function deleteShippingTemplateUpgrade(parameters) {
    return HttpRequest_1.request(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'DELETE');
}
exports.deleteShippingTemplateUpgrade = deleteShippingTemplateUpgrade;
