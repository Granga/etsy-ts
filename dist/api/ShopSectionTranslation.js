"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function getShopSectionTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET");
}
exports.getShopSectionTranslation = getShopSectionTranslation;
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function createShopSectionTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST");
}
exports.createShopSectionTranslation = createShopSectionTranslation;
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function updateShopSectionTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT");
}
exports.updateShopSectionTranslation = updateShopSectionTranslation;
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function deleteShopSectionTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE");
}
exports.deleteShopSectionTranslation = deleteShopSectionTranslation;
exports.ShopSectionTranslation = {
    getShopSectionTranslation: getShopSectionTranslation,
    createShopSectionTranslation: createShopSectionTranslation,
    updateShopSectionTranslation: updateShopSectionTranslation,
    deleteShopSectionTranslation: deleteShopSectionTranslation
};
