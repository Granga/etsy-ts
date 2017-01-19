"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get all guest's carts
 */
function findAllGuestCarts(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts', 'GET');
}
exports.findAllGuestCarts = findAllGuestCarts;
/**
 * Add a listing to guest's cart
 */
function addToGuestCart(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts', 'POST');
}
exports.addToGuestCart = addToGuestCart;
/**
 * Update a guest's cart listing purchase quantity
 */
function updateGuestCartListingQuantity(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts', 'PUT');
}
exports.updateGuestCartListingQuantity = updateGuestCartListingQuantity;
/**
 * Remove a listing from a guest's cart
 */
function removeGuestCartListing(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts', 'DELETE');
}
exports.removeGuestCartListing = removeGuestCartListing;
/**
 * Get a guest's cart
 */
function findGuestCart(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts/:cart_id', 'GET');
}
exports.findGuestCart = findGuestCart;
/**
 * Update a guest's cart
 */
function updateGuestCart(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts/:cart_id', 'PUT');
}
exports.updateGuestCart = updateGuestCart;
/**
 * Delete a guest's cart
 */
function deleteGuestCart(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/carts/:cart_id', 'DELETE');
}
exports.deleteGuestCart = deleteGuestCart;
