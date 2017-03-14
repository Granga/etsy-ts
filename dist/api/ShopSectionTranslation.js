"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function getShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function createShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function updateShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function deleteShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE", options);
}
exports.ShopSectionTranslation = {
    getShopSectionTranslation: getShopSectionTranslation,
    createShopSectionTranslation: createShopSectionTranslation,
    updateShopSectionTranslation: updateShopSectionTranslation,
    deleteShopSectionTranslation: deleteShopSectionTranslation
};
