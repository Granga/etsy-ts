"use strict";
class GuestCart {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all guest's carts
     */
    findAllGuestCarts(parameters) {
        return this.client.http("/guests/:guest_id/carts", parameters, "GET");
    }
    /**
     * Add a listing to guest's cart
     */
    addToGuestCart(parameters) {
        return this.client.http("/guests/:guest_id/carts", parameters, "POST");
    }
    /**
     * Update a guest's cart listing purchase quantity
     */
    updateGuestCartListingQuantity(parameters) {
        return this.client.http("/guests/:guest_id/carts", parameters, "PUT");
    }
    /**
     * Remove a listing from a guest's cart
     */
    removeGuestCartListing(parameters) {
        return this.client.http("/guests/:guest_id/carts", parameters, "DELETE");
    }
    /**
     * Get a guest's cart
     */
    findGuestCart(parameters) {
        return this.client.http("/guests/:guest_id/carts/:cart_id", parameters, "GET");
    }
    /**
     * Update a guest's cart
     */
    updateGuestCart(parameters) {
        return this.client.http("/guests/:guest_id/carts/:cart_id", parameters, "PUT");
    }
    /**
     * Delete a guest's cart
     */
    deleteGuestCart(parameters) {
        return this.client.http("/guests/:guest_id/carts/:cart_id", parameters, "DELETE");
    }
}
exports.GuestCart = GuestCart;
