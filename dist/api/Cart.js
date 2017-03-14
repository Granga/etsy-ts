"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a user's Carts
 */
function getAllUserCarts(parameters, options) {
    return client_1.request("/users/:user_id/carts", parameters, "GET", options);
}
/**
 * Add a listing to a cart
 */
function addToCart(parameters, options) {
    return client_1.request("/users/:user_id/carts", parameters, "POST", options);
}
/**
 * Update a cart listing purchase quantity
 */
function updateCartListingQuantity(parameters, options) {
    return client_1.request("/users/:user_id/carts", parameters, "PUT", options);
}
/**
 * Remove a listing from a cart
 */
function removeCartListing(parameters, options) {
    return client_1.request("/users/:user_id/carts", parameters, "DELETE", options);
}
/**
 * Get a cart
 */
function getUserCart(parameters, options) {
    return client_1.request("/users/:user_id/carts/:cart_id", parameters, "GET", options);
}
/**
 * Update a cart
 */
function updateCart(parameters, options) {
    return client_1.request("/users/:user_id/carts/:cart_id", parameters, "PUT", options);
}
/**
 * Delete a cart
 */
function deleteCart(parameters, options) {
    return client_1.request("/users/:user_id/carts/:cart_id", parameters, "DELETE", options);
}
/**
 * Saves and selects a shipping address for apple pay
 */
function addAndSelectShippingForApplePay(parameters, options) {
    return client_1.request("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST", options);
}
/**
 * Move a listing to Saved for Later
 */
function saveListingForLater(parameters, options) {
    return client_1.request("/users/:user_id/carts/save", parameters, "DELETE", options);
}
/**
 * Get a cart from a shop ID
 */
function getUserCartForShop(parameters, options) {
    return client_1.request("/users/:user_id/carts/shop/:shop_id", parameters, "GET", options);
}
/**
 * Create a single-listing cart from a listing
 */
function createSingleListingCart(parameters, options) {
    return client_1.request("/users/:user_id/carts/single_listing", parameters, "POST", options);
}
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
