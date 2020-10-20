"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
 */
function findAllShops(parameters, options) {
    return client_1.request("/shops", parameters, "GET", options);
}
/**
 * Retrieves a Shop by id.
 */
function getShop(parameters, options) {
    return client_1.request("/shops/:shop_id", parameters, "GET", options);
}
/**
 * Updates a Shop
 */
function updateShop(parameters, options) {
    return client_1.request("/shops/:shop_id", parameters, "PUT", options);
}
/**
 * Upload a new shop banner image
 */
function uploadShopBanner(parameters, options) {
    return client_1.request("/shops/:shop_id/appearance/banner", parameters, "POST", options);
}
/**
 * Deletes a shop banner image
 */
function deleteShopBanner(parameters, options) {
    return client_1.request("/shops/:shop_id/appearance/banner", parameters, "DELETE", options);
}
/**
 * Retrieves a shop by a listing id.
 */
function getListingShop(parameters, options) {
    return client_1.request("/shops/listing/:listing_id", parameters, "GET", options);
}
/**
 * Retrieves a set of Shop objects associated to a User.
 */
function findAllUserShops(parameters, options) {
    return client_1.request("/users/:user_id/shops", parameters, "GET", options);
}
exports.Shop = {
    findAllShops,
    getShop,
    updateShop,
    uploadShopBanner,
    deleteShopBanner,
    getListingShop,
    findAllUserShops
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFxUXJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLE9BQU8sQ0FBVSxVQUE4QixFQUFFLE9BQWtCO0lBQ3hFLE9BQU8sZ0JBQU8sQ0FBOEIsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBVSxVQUFpQyxFQUFFLE9BQWtCO0lBQzlFLE9BQU8sZ0JBQU8sQ0FBaUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGdCQUFnQixDQUFVLFVBQXVDLEVBQUUsT0FBa0I7SUFDMUYsT0FBTyxnQkFBTyxDQUF1QyxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCLENBQVUsVUFBdUMsRUFBRSxPQUFrQjtJQUMxRixPQUFPLGdCQUFPLENBQXVDLG1DQUFtQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQVUsVUFBcUMsRUFBRSxPQUFrQjtJQUN0RixPQUFPLGdCQUFPLENBQXFDLDRCQUE0QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBVSxVQUF1QyxFQUFFLE9BQWtCO0lBQzFGLE9BQU8sZ0JBQU8sQ0FBdUMsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RyxDQUFDO0FBRVksUUFBQSxJQUFJLEdBQUc7SUFDaEIsWUFBWTtJQUNaLE9BQU87SUFDUCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CLENBQUMifQ==