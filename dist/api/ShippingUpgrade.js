"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get the shipping upgrades available for a listing.
 */
function getListingShippingUpgrades(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/upgrades", parameters, "GET");
}
exports.getListingShippingUpgrades = getListingShippingUpgrades;
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function createListingShippingUpgrade(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/upgrades", parameters, "POST");
}
exports.createListingShippingUpgrade = createListingShippingUpgrade;
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function updateListingShippingUpgrade(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/upgrades", parameters, "PUT");
}
exports.updateListingShippingUpgrade = updateListingShippingUpgrade;
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function deleteListingShippingUpgrade(parameters) {
    return httpClient_1.request("/listings/:listing_id/shipping/upgrades", parameters, "DELETE");
}
exports.deleteListingShippingUpgrade = deleteListingShippingUpgrade;
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
function findAllShippingTemplateUpgrades(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET");
}
exports.findAllShippingTemplateUpgrades = findAllShippingTemplateUpgrades;
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function createShippingTemplateUpgrade(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST");
}
exports.createShippingTemplateUpgrade = createShippingTemplateUpgrade;
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function updateShippingTemplateUpgrade(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT");
}
exports.updateShippingTemplateUpgrade = updateShippingTemplateUpgrade;
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function deleteShippingTemplateUpgrade(parameters) {
    return httpClient_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE");
}
exports.deleteShippingTemplateUpgrade = deleteShippingTemplateUpgrade;
exports.ShippingUpgrade = {
    getListingShippingUpgrades: getListingShippingUpgrades,
    createListingShippingUpgrade: createListingShippingUpgrade,
    updateListingShippingUpgrade: updateListingShippingUpgrade,
    deleteListingShippingUpgrade: deleteListingShippingUpgrade,
    findAllShippingTemplateUpgrades: findAllShippingTemplateUpgrades,
    createShippingTemplateUpgrade: createShippingTemplateUpgrade,
    updateShippingTemplateUpgrade: updateShippingTemplateUpgrade,
    deleteShippingTemplateUpgrade: deleteShippingTemplateUpgrade
};
