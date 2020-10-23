"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var client_1 = require("../client/client");
//methods class
var Cart = /** @class */ (function () {
    function Cart() {
    }
    /**
     * Get a user's Carts
     */
    Cart.getAllUserCarts = function (parameters, options) {
        return client_1.request("/users/:user_id/carts", parameters, "GET", options);
    };
    /**
     * Add a listing to a cart
     */
    Cart.addToCart = function (parameters, options) {
        return client_1.request("/users/:user_id/carts", parameters, "POST", options);
    };
    /**
     * Update a cart listing purchase quantity
     */
    Cart.updateCartListingQuantity = function (parameters, options) {
        return client_1.request("/users/:user_id/carts", parameters, "PUT", options);
    };
    /**
     * Remove a listing from a cart
     */
    Cart.removeCartListing = function (parameters, options) {
        return client_1.request("/users/:user_id/carts", parameters, "DELETE", options);
    };
    /**
     * Get a cart
     */
    Cart.getUserCart = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/:cart_id", parameters, "GET", options);
    };
    /**
     * Update a cart
     */
    Cart.updateCart = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/:cart_id", parameters, "PUT", options);
    };
    /**
     * Delete a cart
     */
    Cart.deleteCart = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/:cart_id", parameters, "DELETE", options);
    };
    /**
     * Saves and selects a shipping address for apple pay
     */
    Cart.addAndSelectShippingForApplePay = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST", options);
    };
    /**
     * Move a listing to Saved for Later
     */
    Cart.saveListingForLater = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/save", parameters, "DELETE", options);
    };
    /**
     * Get a cart from a shop ID
     */
    Cart.getUserCartForShop = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/shop/:shop_id", parameters, "GET", options);
    };
    /**
     * Create a single-listing cart from a listing
     */
    Cart.createSingleListingCart = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/single_listing", parameters, "POST", options);
    };
    return Cart;
}());
exports.Cart = Cart;
