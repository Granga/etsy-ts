"use strict";
class Cart {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a user's Carts
     */
    getAllUserCarts(parameters) {
        return this.client.http("/users/:user_id/carts", parameters, "GET");
    }
    /**
     * Add a listing to a cart
     */
    addToCart(parameters) {
        return this.client.http("/users/:user_id/carts", parameters, "POST");
    }
    /**
     * Update a cart listing purchase quantity
     */
    updateCartListingQuantity(parameters) {
        return this.client.http("/users/:user_id/carts", parameters, "PUT");
    }
    /**
     * Remove a listing from a cart
     */
    removeCartListing(parameters) {
        return this.client.http("/users/:user_id/carts", parameters, "DELETE");
    }
    /**
     * Get a cart
     */
    getUserCart(parameters) {
        return this.client.http("/users/:user_id/carts/:cart_id", parameters, "GET");
    }
    /**
     * Update a cart
     */
    updateCart(parameters) {
        return this.client.http("/users/:user_id/carts/:cart_id", parameters, "PUT");
    }
    /**
     * Delete a cart
     */
    deleteCart(parameters) {
        return this.client.http("/users/:user_id/carts/:cart_id", parameters, "DELETE");
    }
    /**
     * Saves and selects a shipping address for apple pay
     */
    addAndSelectShippingForApplePay(parameters) {
        return this.client.http("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST");
    }
    /**
     * Move a listing to Saved for Later
     */
    saveListingForLater(parameters) {
        return this.client.http("/users/:user_id/carts/save", parameters, "DELETE");
    }
    /**
     * Get a cart from a shop ID
     */
    getUserCartForShop(parameters) {
        return this.client.http("/users/:user_id/carts/shop/:shop_id", parameters, "GET");
    }
    /**
     * Create a single-listing cart from a listing
     */
    createSingleListingCart(parameters) {
        return this.client.http("/users/:user_id/carts/single_listing", parameters, "POST");
    }
}
exports.Cart = Cart;
