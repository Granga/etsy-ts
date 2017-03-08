"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get all guest's carts
 */
function findAllGuestCarts(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts", parameters, "GET");
}
exports.findAllGuestCarts = findAllGuestCarts;
/**
 * Add a listing to guest's cart
 */
function addToGuestCart(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts", parameters, "POST");
}
exports.addToGuestCart = addToGuestCart;
/**
 * Update a guest's cart listing purchase quantity
 */
function updateGuestCartListingQuantity(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts", parameters, "PUT");
}
exports.updateGuestCartListingQuantity = updateGuestCartListingQuantity;
/**
 * Remove a listing from a guest's cart
 */
function removeGuestCartListing(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts", parameters, "DELETE");
}
exports.removeGuestCartListing = removeGuestCartListing;
/**
 * Get a guest's cart
 */
function findGuestCart(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts/:cart_id", parameters, "GET");
}
exports.findGuestCart = findGuestCart;
/**
 * Update a guest's cart
 */
function updateGuestCart(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts/:cart_id", parameters, "PUT");
}
exports.updateGuestCart = updateGuestCart;
/**
 * Delete a guest's cart
 */
function deleteGuestCart(parameters) {
    return httpClient_1.request("/guests/:guest_id/carts/:cart_id", parameters, "DELETE");
}
exports.deleteGuestCart = deleteGuestCart;
exports.GuestCart = {
    findAllGuestCarts: findAllGuestCarts,
    addToGuestCart: addToGuestCart,
    updateGuestCartListingQuantity: updateGuestCartListingQuantity,
    removeGuestCartListing: removeGuestCartListing,
    findGuestCart: findGuestCart,
    updateGuestCart: updateGuestCart,
    deleteGuestCart: deleteGuestCart
};
