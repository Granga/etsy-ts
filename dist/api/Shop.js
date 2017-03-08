"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
 */
function findAllShops(parameters) {
    return httpClient_1.request("/shops", parameters, "GET");
}
exports.findAllShops = findAllShops;
/**
 * Retrieves a Shop by id.
 */
function getShop(parameters) {
    return httpClient_1.request("/shops/:shop_id", parameters, "GET");
}
exports.getShop = getShop;
/**
 * Updates a Shop
 */
function updateShop(parameters) {
    return httpClient_1.request("/shops/:shop_id", parameters, "PUT");
}
exports.updateShop = updateShop;
/**
 * Upload a new shop banner image
 */
function uploadShopBanner(parameters) {
    return httpClient_1.request("/shops/:shop_id/appearance/banner", parameters, "POST");
}
exports.uploadShopBanner = uploadShopBanner;
/**
 * Deletes a shop banner image
 */
function deleteShopBanner(parameters) {
    return httpClient_1.request("/shops/:shop_id/appearance/banner", parameters, "DELETE");
}
exports.deleteShopBanner = deleteShopBanner;
/**
 * Retrieves a shop by a listing id.
 */
function getListingShop(parameters) {
    return httpClient_1.request("/shops/listing/:listing_id", parameters, "GET");
}
exports.getListingShop = getListingShop;
/**
 * Retrieves a set of Shop objects associated to a User.
 */
function findAllUserShops(parameters) {
    return httpClient_1.request("/users/:user_id/shops", parameters, "GET");
}
exports.findAllUserShops = findAllUserShops;
exports.Shop = {
    findAllShops: findAllShops,
    getShop: getShop,
    updateShop: updateShop,
    uploadShopBanner: uploadShopBanner,
    deleteShopBanner: deleteShopBanner,
    getListingShop: getListingShop,
    findAllUserShops: findAllUserShops
};
