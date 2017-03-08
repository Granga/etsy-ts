"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
function findAllShopSections(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections", parameters, "GET");
}
exports.findAllShopSections = findAllShopSections;
/**
 * Creates a new ShopSection.
 */
function createShopSection(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections", parameters, "POST");
}
exports.createShopSection = createShopSection;
/**
 * Retrieves a ShopSection by id and shop_id
 */
function getShopSection(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET");
}
exports.getShopSection = getShopSection;
/**
 * Updates a ShopSection with the given id.
 */
function updateShopSection(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT");
}
exports.updateShopSection = updateShopSection;
/**
 * Deletes the ShopSection with the given id.
 */
function deleteShopSection(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE");
}
exports.deleteShopSection = deleteShopSection;
exports.ShopSection = {
    findAllShopSections: findAllShopSections,
    createShopSection: createShopSection,
    getShopSection: getShopSection,
    updateShopSection: updateShopSection,
    deleteShopSection: deleteShopSection
};
