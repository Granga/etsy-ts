"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopTranslation by shop_id and language
 */
function getShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopTranslation by shop_id and language
 */
function createShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopTranslation by shop_id and language
 */
function updateShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopTranslation by shop_id and language
 */
function deleteShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
}
exports.ShopTranslation = {
    getShopTranslation: getShopTranslation,
    createShopTranslation: createShopTranslation,
    updateShopTranslation: updateShopTranslation,
    deleteShopTranslation: deleteShopTranslation
};
