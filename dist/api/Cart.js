"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const client_1 = require("../client/client");
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
    getAllUserCarts,
    addToCart,
    updateCartListingQuantity,
    removeCartListing,
    getUserCart,
    updateCart,
    deleteCart,
    addAndSelectShippingForApplePay,
    saveListingForLater,
    getUserCartForShop,
    createSingleListingCart
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvQ2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUF5SnJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFVLFVBQXNDLEVBQUUsT0FBa0I7SUFDeEYsT0FBTyxnQkFBTyxDQUFzQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsU0FBUyxDQUFVLFVBQWdDLEVBQUUsT0FBa0I7SUFDNUUsT0FBTyxnQkFBTyxDQUFnQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELHVCQUF1QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBVSxVQUF3QyxFQUFFLE9BQWtCO0lBQzVGLE9BQU8sZ0JBQU8sQ0FBd0MsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFdBQVcsQ0FBVSxVQUFrQyxFQUFFLE9BQWtCO0lBQ2hGLE9BQU8sZ0JBQU8sQ0FBa0MsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBVSxVQUFpQyxFQUFFLE9BQWtCO0lBQzlFLE9BQU8sZ0JBQU8sQ0FBaUMsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBVSxVQUFpQyxFQUFFLE9BQWtCO0lBQzlFLE9BQU8sZ0JBQU8sQ0FBaUMsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLCtCQUErQixDQUFVLFVBQXNELEVBQUUsT0FBa0I7SUFDeEgsT0FBTyxnQkFBTyxDQUFzRCxrRUFBa0UsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQVUsVUFBMEMsRUFBRSxPQUFrQjtJQUNoRyxPQUFPLGdCQUFPLENBQTBDLDRCQUE0QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBVSxVQUF5QyxFQUFFLE9BQWtCO0lBQzlGLE9BQU8sZ0JBQU8sQ0FBeUMscUNBQXFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHVCQUF1QixDQUFVLFVBQThDLEVBQUUsT0FBa0I7SUFDeEcsT0FBTyxnQkFBTyxDQUE4QyxzQ0FBc0MsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JJLENBQUM7QUFFWSxRQUFBLElBQUksR0FBRztJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0NBQzFCLENBQUMifQ==