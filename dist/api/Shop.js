"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
*/
function findAllShops(parameters, options) {
    return client_1.request("/shops", parameters, "GET", options);
}
/**
* Retrieves a Shop by id.
*/
function getShop(parameters, options) {
    return client_1.request("/shops/:shop_id", parameters, "GET", options);
}
/**
* Updates a Shop
*/
function updateShop(parameters, options) {
    return client_1.request("/shops/:shop_id", parameters, "PUT", options);
}
/**
* Upload a new shop banner image
*/
function uploadShopBanner(parameters, options) {
    return client_1.request("/shops/:shop_id/appearance/banner", parameters, "POST", options);
}
/**
* Deletes a shop banner image
*/
function deleteShopBanner(parameters, options) {
    return client_1.request("/shops/:shop_id/appearance/banner", parameters, "DELETE", options);
}
/**
* Retrieves a shop by a listing id.
*/
function getListingShop(parameters, options) {
    return client_1.request("/shops/listing/:listing_id", parameters, "GET", options);
}
/**
* Retrieves a set of Shop objects associated to a User.
*/
function findAllUserShops(parameters, options) {
    return client_1.request("/users/:user_id/shops", parameters, "GET", options);
}
exports.Shop = { findAllShops: findAllShops, getShop: getShop, updateShop: updateShop, uploadShopBanner: uploadShopBanner, deleteShopBanner: deleteShopBanner, getListingShop: getListingShop, findAllUserShops: findAllUserShops };
