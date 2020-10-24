"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestCart = void 0;
var client_1 = require("../client/client");
//methods class
var GuestCart = /** @class */ (function () {
    function GuestCart() {
    }
    /**
     * Get all guest's carts
     */
    GuestCart.findAllGuestCarts = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts", parameters, "GET", options);
    };
    /**
     * Add a listing to guest's cart
     */
    GuestCart.addToGuestCart = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts", parameters, "POST", options);
    };
    /**
     * Update a guest's cart listing purchase quantity
     */
    GuestCart.updateGuestCartListingQuantity = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts", parameters, "PUT", options);
    };
    /**
     * Remove a listing from a guest's cart
     */
    GuestCart.removeGuestCartListing = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts", parameters, "DELETE", options);
    };
    /**
     * Get a guest's cart
     */
    GuestCart.findGuestCart = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "GET", options);
    };
    /**
     * Update a guest's cart
     */
    GuestCart.updateGuestCart = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "PUT", options);
    };
    /**
     * Delete a guest's cart
     */
    GuestCart.deleteGuestCart = function (parameters, options) {
        return client_1.request("/guests/:guest_id/carts/:cart_id", parameters, "DELETE", options);
    };
    return GuestCart;
}());
exports.GuestCart = GuestCart;
