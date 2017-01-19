"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
 */
function findAllShops(parameters) {
    return HttpRequest_1.request(parameters, '/shops', 'GET');
}
exports.findAllShops = findAllShops;
/**
 * Retrieves a Shop by id.
 */
function getShop(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id', 'GET');
}
exports.getShop = getShop;
/**
 * Updates a Shop
 */
function updateShop(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id', 'PUT');
}
exports.updateShop = updateShop;
/**
 * Upload a new shop banner image
 */
function uploadShopBanner(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/appearance/banner', 'POST');
}
exports.uploadShopBanner = uploadShopBanner;
/**
 * Deletes a shop banner image
 */
function deleteShopBanner(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/appearance/banner', 'DELETE');
}
exports.deleteShopBanner = deleteShopBanner;
/**
 * Retrieves a shop by a listing id.
 */
function getListingShop(parameters) {
    return HttpRequest_1.request(parameters, '/shops/listing/:listing_id', 'GET');
}
exports.getListingShop = getListingShop;
/**
 * Retrieves a set of Shop objects associated to a User.
 */
function findAllUserShops(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/shops', 'GET');
}
exports.findAllUserShops = findAllUserShops;
