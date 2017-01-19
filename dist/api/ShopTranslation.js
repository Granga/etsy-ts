"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a ShopTranslation by shop_id and language
 */
function getShopTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/translations/:language', 'GET');
}
exports.getShopTranslation = getShopTranslation;
/**
 * Creates a ShopTranslation by shop_id and language
 */
function createShopTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/translations/:language', 'POST');
}
exports.createShopTranslation = createShopTranslation;
/**
 * Updates a ShopTranslation by shop_id and language
 */
function updateShopTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/translations/:language', 'PUT');
}
exports.updateShopTranslation = updateShopTranslation;
/**
 * Deletes a ShopTranslation by shop_id and language
 */
function deleteShopTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/translations/:language', 'DELETE');
}
exports.deleteShopTranslation = deleteShopTranslation;
