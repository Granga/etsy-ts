"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a user's Carts
 */
function getAllUserCarts(parameters) {
    return httpClient_1.request("/users/:user_id/carts", parameters, "GET");
}
exports.getAllUserCarts = getAllUserCarts;
/**
 * Add a listing to a cart
 */
function addToCart(parameters) {
    return httpClient_1.request("/users/:user_id/carts", parameters, "POST");
}
exports.addToCart = addToCart;
/**
 * Update a cart listing purchase quantity
 */
function updateCartListingQuantity(parameters) {
    return httpClient_1.request("/users/:user_id/carts", parameters, "PUT");
}
exports.updateCartListingQuantity = updateCartListingQuantity;
/**
 * Remove a listing from a cart
 */
function removeCartListing(parameters) {
    return httpClient_1.request("/users/:user_id/carts", parameters, "DELETE");
}
exports.removeCartListing = removeCartListing;
/**
 * Get a cart
 */
function getUserCart(parameters) {
    return httpClient_1.request("/users/:user_id/carts/:cart_id", parameters, "GET");
}
exports.getUserCart = getUserCart;
/**
 * Update a cart
 */
function updateCart(parameters) {
    return httpClient_1.request("/users/:user_id/carts/:cart_id", parameters, "PUT");
}
exports.updateCart = updateCart;
/**
 * Delete a cart
 */
function deleteCart(parameters) {
    return httpClient_1.request("/users/:user_id/carts/:cart_id", parameters, "DELETE");
}
exports.deleteCart = deleteCart;
/**
 * Saves and selects a shipping address for apple pay
 */
function addAndSelectShippingForApplePay(parameters) {
    return httpClient_1.request("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST");
}
exports.addAndSelectShippingForApplePay = addAndSelectShippingForApplePay;
/**
 * Move a listing to Saved for Later
 */
function saveListingForLater(parameters) {
    return httpClient_1.request("/users/:user_id/carts/save", parameters, "DELETE");
}
exports.saveListingForLater = saveListingForLater;
/**
 * Get a cart from a shop ID
 */
function getUserCartForShop(parameters) {
    return httpClient_1.request("/users/:user_id/carts/shop/:shop_id", parameters, "GET");
}
exports.getUserCartForShop = getUserCartForShop;
/**
 * Create a single-listing cart from a listing
 */
function createSingleListingCart(parameters) {
    return httpClient_1.request("/users/:user_id/carts/single_listing", parameters, "POST");
}
exports.createSingleListingCart = createSingleListingCart;
exports.Cart = {
    getAllUserCarts: getAllUserCarts,
    addToCart: addToCart,
    updateCartListingQuantity: updateCartListingQuantity,
    removeCartListing: removeCartListing,
    getUserCart: getUserCart,
    updateCart: updateCart,
    deleteCart: deleteCart,
    addAndSelectShippingForApplePay: addAndSelectShippingForApplePay,
    saveListingForLater: saveListingForLater,
    getUserCartForShop: getUserCartForShop,
    createSingleListingCart: createSingleListingCart
};
