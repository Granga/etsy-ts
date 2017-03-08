"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get the shipping upgrades available for a listing.
*/
function getListingShippingUpgrades(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "GET", options);
}
/**
* Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
*/
function createListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "POST", options);
}
/**
* Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
*/
function updateListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "PUT", options);
}
/**
* Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
*/
function deleteListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "DELETE", options);
}
/**
* Retrieves a list of shipping upgrades for the parent ShippingTemplate
*/
function findAllShippingTemplateUpgrades(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET", options);
}
/**
* Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
function createShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST", options);
}
/**
* Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
function updateShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT", options);
}
/**
* Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
function deleteShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE", options);
}
exports.ShippingUpgrade = { getListingShippingUpgrades: getListingShippingUpgrades, createListingShippingUpgrade: createListingShippingUpgrade, updateListingShippingUpgrade: updateListingShippingUpgrade, deleteListingShippingUpgrade: deleteListingShippingUpgrade, findAllShippingTemplateUpgrades: findAllShippingTemplateUpgrades, createShippingTemplateUpgrade: createShippingTemplateUpgrade, updateShippingTemplateUpgrade: updateShippingTemplateUpgrade, deleteShippingTemplateUpgrade: deleteShippingTemplateUpgrade };
