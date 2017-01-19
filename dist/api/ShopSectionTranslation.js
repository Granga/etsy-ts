"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function getShopSectionTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'GET');
}
exports.getShopSectionTranslation = getShopSectionTranslation;
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function createShopSectionTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'POST');
}
exports.createShopSectionTranslation = createShopSectionTranslation;
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function updateShopSectionTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'PUT');
}
exports.updateShopSectionTranslation = updateShopSectionTranslation;
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function deleteShopSectionTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'DELETE');
}
exports.deleteShopSectionTranslation = deleteShopSectionTranslation;
