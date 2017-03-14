"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
function findAllShopSections(parameters, options) {
    return client_1.request("/shops/:shop_id/sections", parameters, "GET", options);
}
/**
 * Creates a new ShopSection.
 */
function createShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections", parameters, "POST", options);
}
/**
 * Retrieves a ShopSection by id and shop_id
 */
function getShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
}
/**
 * Updates a ShopSection with the given id.
 */
function updateShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
}
/**
 * Deletes the ShopSection with the given id.
 */
function deleteShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
}
exports.ShopSection = {
    findAllShopSections: findAllShopSections,
    createShopSection: createShopSection,
    getShopSection: getShopSection,
    updateShopSection: updateShopSection,
    deleteShopSection: deleteShopSection
};
