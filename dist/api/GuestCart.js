"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get all guest's carts
 */
function findAllGuestCarts(parameters, options) {
    return client_1.request("/guests/:guest_id/carts", parameters, "GET", options);
}
/**
 * Add a listing to guest's cart
 */
function addToGuestCart(parameters, options) {
    return client_1.request("/guests/:guest_id/carts", parameters, "POST", options);
}
/**
 * Update a guest's cart listing purchase quantity
 */
function updateGuestCartListingQuantity(parameters, options) {
    return client_1.request("/guests/:guest_id/carts", parameters, "PUT", options);
}
/**
 * Remove a listing from a guest's cart
 */
function removeGuestCartListing(parameters, options) {
    return client_1.request("/guests/:guest_id/carts", parameters, "DELETE", options);
}
/**
 * Get a guest's cart
 */
function findGuestCart(parameters, options) {
    return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "GET", options);
}
/**
 * Update a guest's cart
 */
function updateGuestCart(parameters, options) {
    return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "PUT", options);
}
/**
 * Delete a guest's cart
 */
function deleteGuestCart(parameters, options) {
    return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "DELETE", options);
}
exports.GuestCart = {
    findAllGuestCarts: findAllGuestCarts,
    addToGuestCart: addToGuestCart,
    updateGuestCartListingQuantity: updateGuestCartListingQuantity,
    removeGuestCartListing: removeGuestCartListing,
    findGuestCart: findGuestCart,
    updateGuestCart: updateGuestCart,
    deleteGuestCart: deleteGuestCart
};
