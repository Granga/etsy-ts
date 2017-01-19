"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a user's Carts
*/
function getAllUserCarts(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts', 'GET');
}
exports.getAllUserCarts = getAllUserCarts;
/**
* Add a listing to a cart
*/
function addToCart(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts', 'POST');
}
exports.addToCart = addToCart;
/**
* Update a cart listing purchase quantity
*/
function updateCartListingQuantity(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts', 'PUT');
}
exports.updateCartListingQuantity = updateCartListingQuantity;
/**
* Remove a listing from a cart
*/
function removeCartListing(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts', 'DELETE');
}
exports.removeCartListing = removeCartListing;
/**
* Get a cart
*/
function getUserCart(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/:cart_id', 'GET');
}
exports.getUserCart = getUserCart;
/**
* Update a cart
*/
function updateCart(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/:cart_id', 'PUT');
}
exports.updateCart = updateCart;
/**
* Delete a cart
*/
function deleteCart(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/:cart_id', 'DELETE');
}
exports.deleteCart = deleteCart;
/**
* Saves and selects a shipping address for apple pay
*/
function addAndSelectShippingForApplePay(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple', 'POST');
}
exports.addAndSelectShippingForApplePay = addAndSelectShippingForApplePay;
/**
* Move a listing to Saved for Later
*/
function saveListingForLater(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/save', 'DELETE');
}
exports.saveListingForLater = saveListingForLater;
/**
* Get a cart from a shop ID
*/
function getUserCartForShop(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/shop/:shop_id', 'GET');
}
exports.getUserCartForShop = getUserCartForShop;
/**
* Create a single-listing cart from a listing
*/
function createSingleListingCart(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/single_listing', 'POST');
}
exports.createSingleListingCart = createSingleListingCart;
