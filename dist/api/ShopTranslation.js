"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a ShopTranslation by shop_id and language
 */
function getShopTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/translations/:language", parameters, "GET");
}
exports.getShopTranslation = getShopTranslation;
/**
 * Creates a ShopTranslation by shop_id and language
 */
function createShopTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/translations/:language", parameters, "POST");
}
exports.createShopTranslation = createShopTranslation;
/**
 * Updates a ShopTranslation by shop_id and language
 */
function updateShopTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/translations/:language", parameters, "PUT");
}
exports.updateShopTranslation = updateShopTranslation;
/**
 * Deletes a ShopTranslation by shop_id and language
 */
function deleteShopTranslation(parameters) {
    return httpClient_1.request("/shops/:shop_id/translations/:language", parameters, "DELETE");
}
exports.deleteShopTranslation = deleteShopTranslation;
exports.ShopTranslation = {
    getShopTranslation: getShopTranslation,
    createShopTranslation: createShopTranslation,
    updateShopTranslation: updateShopTranslation,
    deleteShopTranslation: deleteShopTranslation
};
