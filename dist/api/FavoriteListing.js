"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteListing = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of FavoriteListing objects associated to a Listing.
 */
function findAllListingFavoredBy(parameters, options) {
    return client_1.request("/listings/:listing_id/favored-by", parameters, "GET", options);
}
/**
 * Finds all favorite listings for a user
 */
function findAllUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings", parameters, "GET", options);
}
/**
 * Finds a favorite listing for a user
 */
function findUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "GET", options);
}
/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "POST", options);
}
/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE", options);
}
exports.FavoriteListing = {
    findAllListingFavoredBy,
    findAllUserFavoriteListings,
    findUserFavoriteListings,
    createUserFavoriteListings,
    deleteUserFavoriteListings
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGVMaXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9GYXZvcml0ZUxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBa0RyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLHVCQUF1QixDQUFVLFVBQThDLEVBQUUsT0FBa0I7SUFDeEcsT0FBTyxnQkFBTyxDQUE4QyxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsMkJBQTJCLENBQVUsVUFBa0QsRUFBRSxPQUFrQjtJQUNoSCxPQUFPLGdCQUFPLENBQWtELG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBVSxVQUErQyxFQUFFLE9BQWtCO0lBQzFHLE9BQU8sZ0JBQU8sQ0FBK0MsZ0RBQWdELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvSSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFVLFVBQWlELEVBQUUsT0FBa0I7SUFDOUcsT0FBTyxnQkFBTyxDQUFpRCxnREFBZ0QsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsMEJBQTBCLENBQVUsVUFBaUQsRUFBRSxPQUFrQjtJQUM5RyxPQUFPLGdCQUFPLENBQWlELGdEQUFnRCxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEosQ0FBQztBQUVZLFFBQUEsZUFBZSxHQUFHO0lBQzNCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwwQkFBMEI7Q0FDN0IsQ0FBQyJ9