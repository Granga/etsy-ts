"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Creates a new Listing.
 */
function createListing(parameters, options) {
    return client_1.request("/listings", parameters, "POST", options);
}
/**
 * Finds all FeaturedTreasury listings.
 */
function findAllFeaturedListings(parameters, options) {
    return client_1.request("/featured_treasuries/listings", parameters, "GET", options);
}
/**
 * Retrieves a Listing by id.
 */
function getListing(parameters, options) {
    return client_1.request("/listings/:listing_id", parameters, "GET", options);
}
/**
 * Updates a Listing
 */
function updateListing(parameters, options) {
    return client_1.request("/listings/:listing_id", parameters, "PUT", options);
}
/**
 * Deletes a Listing
 */
function deleteListing(parameters, options) {
    return client_1.request("/listings/:listing_id", parameters, "DELETE", options);
}
/**
 * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
 */
function findAllListingActive(parameters, options) {
    return client_1.request("/listings/active", parameters, "GET", options);
}
/**
 * Collects the list of interesting listings
 */
function getInterestingListings(parameters, options) {
    return client_1.request("/listings/interesting", parameters, "GET", options);
}
/**
 * Collects the list of listings used to generate the trending listing page
 */
function getTrendingListings(parameters, options) {
    return client_1.request("/listings/trending", parameters, "GET", options);
}
/**
 * Finds all listings for a certain FeaturedTreasury.
 */
function findAllListingsForFeaturedTreasuryId(parameters, options) {
    return client_1.request("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET", options);
}
/**
 * Finds all active listings for a certain FeaturedTreasury.
 */
function findAllActiveListingsForFeaturedTreasuryId(parameters, options) {
    return client_1.request("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET", options);
}
/**
 * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
 */
function findAllCurrentFeaturedListings(parameters, options) {
    return client_1.request("/featured_treasuries/listings/homepage_current", parameters, "GET", options);
}
/**
 * Finds all listings in a receipt
 */
function findAllReceiptListings(parameters, options) {
    return client_1.request("/receipts/:receipt_id/listings", parameters, "GET", options);
}
/**
 * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
 */
function findAllShopListingsActive(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/active", parameters, "GET", options);
}
/**
 * Finds all of a Shop's draft listings
 */
function findAllShopListingsDraft(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/draft", parameters, "GET", options);
}
/**
 * Retrieves Listings associated to a Shop that are expired
 */
function findAllShopListingsExpired(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/expired", parameters, "GET", options);
}
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingExpired(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET", options);
}
/**
 * Retrieves Listings associated to a Shop that are featured
 */
function findAllShopListingsFeatured(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/featured", parameters, "GET", options);
}
/**
 * Retrieves Listings associated to a Shop that are inactive
 */
function findAllShopListingsInactive(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/inactive", parameters, "GET", options);
}
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingInactive(parameters, options) {
    return client_1.request("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET", options);
}
/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListings(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET", options);
}
/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListingsActive(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET", options);
}
/**
 * Finds all listings in a given Cart
 */
function findAllCartListings(parameters, options) {
    return client_1.request("/users/:user_id/carts/:cart_id/listings", parameters, "GET", options);
}
exports.Listing = {
    createListing,
    findAllFeaturedListings,
    getListing,
    updateListing,
    deleteListing,
    findAllListingActive,
    getInterestingListings,
    getTrendingListings,
    findAllListingsForFeaturedTreasuryId,
    findAllActiveListingsForFeaturedTreasuryId,
    findAllCurrentFeaturedListings,
    findAllReceiptListings,
    findAllShopListingsActive,
    findAllShopListingsDraft,
    findAllShopListingsExpired,
    getShopListingExpired,
    findAllShopListingsFeatured,
    findAllShopListingsInactive,
    getShopListingInactive,
    findAllShopSectionListings,
    findAllShopSectionListingsActive,
    findAllCartListings
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvTGlzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUF5WXJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFVLFVBQW9DLEVBQUUsT0FBa0I7SUFDcEYsT0FBTyxnQkFBTyxDQUFvQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHVCQUF1QixDQUFVLFVBQThDLEVBQUUsT0FBa0I7SUFDeEcsT0FBTyxnQkFBTyxDQUE4QywrQkFBK0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFVLFVBQWlDLEVBQUUsT0FBa0I7SUFDOUUsT0FBTyxnQkFBTyxDQUFpQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFVLFVBQW9DLEVBQUUsT0FBa0I7SUFDcEYsT0FBTyxnQkFBTyxDQUFvQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFVLFVBQW9DLEVBQUUsT0FBa0I7SUFDcEYsT0FBTyxnQkFBTyxDQUFvQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsb0JBQW9CLENBQVUsVUFBMkMsRUFBRSxPQUFrQjtJQUNsRyxPQUFPLGdCQUFPLENBQTJDLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENB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