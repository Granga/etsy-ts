"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestCart = void 0;
const client_1 = require("../client/client");
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
    findAllGuestCarts,
    addToGuestCart,
    updateGuestCartListingQuantity,
    removeGuestCartListing,
    findGuestCart,
    updateGuestCart,
    deleteGuestCart
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3Vlc3RDYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9HdWVzdENhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBMkhyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3Qyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFVLFVBQXFDLEVBQUUsT0FBa0I7SUFDdEYsT0FBTyxnQkFBTyxDQUFxQyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9HLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsOEJBQThCLENBQVUsVUFBcUQsRUFBRSxPQUFrQjtJQUN0SCxPQUFPLGdCQUFPLENBQXFELHlCQUF5QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBVSxVQUE2QyxFQUFFLE9BQWtCO0lBQ3RHLE9BQU8sZ0JBQU8sQ0FBNkMseUJBQXlCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBVSxVQUFvQyxFQUFFLE9BQWtCO0lBQ3BGLE9BQU8sZ0JBQU8sQ0FBb0Msa0NBQWtDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBVSxVQUFzQyxFQUFFLE9BQWtCO0lBQ3hGLE9BQU8sZ0JBQU8sQ0FBc0Msa0NBQWtDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBVSxVQUFzQyxFQUFFLE9BQWtCO0lBQ3hGLE9BQU8sZ0JBQU8sQ0FBc0Msa0NBQWtDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzSCxDQUFDO0FBRVksUUFBQSxTQUFTLEdBQUc7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtDQUNsQixDQUFDIn0=