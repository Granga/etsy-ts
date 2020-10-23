import { request } from "../client/client";
//methods class
export class GuestCart {
    /**
     * Get all guest's carts
     */
    static findAllGuestCarts(parameters, options) {
        return request("/guests/:guest_id/carts", parameters, "GET", options);
    }
    /**
     * Add a listing to guest's cart
     */
    static addToGuestCart(parameters, options) {
        return request("/guests/:guest_id/carts", parameters, "POST", options);
    }
    /**
     * Update a guest's cart listing purchase quantity
     */
    static updateGuestCartListingQuantity(parameters, options) {
        return request("/guests/:guest_id/carts", parameters, "PUT", options);
    }
    /**
     * Remove a listing from a guest's cart
     */
    static removeGuestCartListing(parameters, options) {
        return request("/guests/:guest_id/carts", parameters, "DELETE", options);
    }
    /**
     * Get a guest's cart
     */
    static findGuestCart(parameters, options) {
        return request("/guests/:guest_id/carts/:cart_id", parameters, "GET", options);
    }
    /**
     * Update a guest's cart
     */
    static updateGuestCart(parameters, options) {
        return request("/guests/:guest_id/carts/:cart_id", parameters, "PUT", options);
    }
    /**
     * Delete a guest's cart
     */
    static deleteGuestCart(parameters, options) {
        return request("/guests/:guest_id/carts/:cart_id", parameters, "DELETE", options);
    }
}
