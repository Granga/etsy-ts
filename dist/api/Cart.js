import { request } from "../client/client";
//methods class
export class Cart {
    /**
     * Get a user's Carts
     */
    static getAllUserCarts(parameters, options) {
        return request("/users/:user_id/carts", parameters, "GET", options);
    }
    /**
     * Add a listing to a cart
     */
    static addToCart(parameters, options) {
        return request("/users/:user_id/carts", parameters, "POST", options);
    }
    /**
     * Update a cart listing purchase quantity
     */
    static updateCartListingQuantity(parameters, options) {
        return request("/users/:user_id/carts", parameters, "PUT", options);
    }
    /**
     * Remove a listing from a cart
     */
    static removeCartListing(parameters, options) {
        return request("/users/:user_id/carts", parameters, "DELETE", options);
    }
    /**
     * Get a cart
     */
    static getUserCart(parameters, options) {
        return request("/users/:user_id/carts/:cart_id", parameters, "GET", options);
    }
    /**
     * Update a cart
     */
    static updateCart(parameters, options) {
        return request("/users/:user_id/carts/:cart_id", parameters, "PUT", options);
    }
    /**
     * Delete a cart
     */
    static deleteCart(parameters, options) {
        return request("/users/:user_id/carts/:cart_id", parameters, "DELETE", options);
    }
    /**
     * Saves and selects a shipping address for apple pay
     */
    static addAndSelectShippingForApplePay(parameters, options) {
        return request("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST", options);
    }
    /**
     * Move a listing to Saved for Later
     */
    static saveListingForLater(parameters, options) {
        return request("/users/:user_id/carts/save", parameters, "DELETE", options);
    }
    /**
     * Get a cart from a shop ID
     */
    static getUserCartForShop(parameters, options) {
        return request("/users/:user_id/carts/shop/:shop_id", parameters, "GET", options);
    }
    /**
     * Create a single-listing cart from a listing
     */
    static createSingleListingCart(parameters, options) {
        return request("/users/:user_id/carts/single_listing", parameters, "POST", options);
    }
}
