"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
 */
function createListing(parameters) {
    return httpClient_1.request("/listings", parameters, "POST");
}
exports.createListing = createListing;
/**
 * Finds all FeaturedTreasury listings.
 */
function findAllFeaturedListings(parameters) {
    return httpClient_1.request("/featured_treasuries/listings", parameters, "GET");
}
exports.findAllFeaturedListings = findAllFeaturedListings;
/**
 * Retrieves a Listing by id.
 */
function getListing(parameters) {
    return httpClient_1.request("/listings/:listing_id", parameters, "GET");
}
exports.getListing = getListing;
/**
 * Updates a Listing
 */
function updateListing(parameters) {
    return httpClient_1.request("/listings/:listing_id", parameters, "PUT");
}
exports.updateListing = updateListing;
/**
 * Deletes a Listing
 */
function deleteListing(parameters) {
    return httpClient_1.request("/listings/:listing_id", parameters, "DELETE");
}
exports.deleteListing = deleteListing;
/**
 * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
 */
function findAllListingActive(parameters) {
    return httpClient_1.request("/listings/active", parameters, "GET");
}
exports.findAllListingActive = findAllListingActive;
/**
 * Collects the list of interesting listings
 */
function getInterestingListings(parameters) {
    return httpClient_1.request("/listings/interesting", parameters, "GET");
}
exports.getInterestingListings = getInterestingListings;
/**
 * Collects the list of listings used to generate the trending listing page
 */
function getTrendingListings(parameters) {
    return httpClient_1.request("/listings/trending", parameters, "GET");
}
exports.getTrendingListings = getTrendingListings;
/**
 * Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
 */
function findBrowseSegmentListings(parameters) {
    return httpClient_1.request("/segments/listings", parameters, "GET");
}
exports.findBrowseSegmentListings = findBrowseSegmentListings;
/**
 * Finds all listings for a certain FeaturedTreasury.
 */
function findAllListingsForFeaturedTreasuryId(parameters) {
    return httpClient_1.request("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET");
}
exports.findAllListingsForFeaturedTreasuryId = findAllListingsForFeaturedTreasuryId;
/**
 * Finds all active listings for a certain FeaturedTreasury.
 */
function findAllActiveListingsForFeaturedTreasuryId(parameters) {
    return httpClient_1.request("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET");
}
exports.findAllActiveListingsForFeaturedTreasuryId = findAllActiveListingsForFeaturedTreasuryId;
/**
 * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
 */
function findAllCurrentFeaturedListings(parameters) {
    return httpClient_1.request("/featured_treasuries/listings/homepage_current", parameters, "GET");
}
exports.findAllCurrentFeaturedListings = findAllCurrentFeaturedListings;
/**
 * Finds all listings in a receipt
 */
function findAllReceiptListings(parameters) {
    return httpClient_1.request("/receipts/:receipt_id/listings", parameters, "GET");
}
exports.findAllReceiptListings = findAllReceiptListings;
/**
 * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
 */
function findAllShopListingsActive(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/active", parameters, "GET");
}
exports.findAllShopListingsActive = findAllShopListingsActive;
/**
 * Finds all of a Shop's draft listings
 */
function findAllShopListingsDraft(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/draft", parameters, "GET");
}
exports.findAllShopListingsDraft = findAllShopListingsDraft;
/**
 * Retrieves Listings associated to a Shop that are expired
 */
function findAllShopListingsExpired(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/expired", parameters, "GET");
}
exports.findAllShopListingsExpired = findAllShopListingsExpired;
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingExpired(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET");
}
exports.getShopListingExpired = getShopListingExpired;
/**
 * Retrieves Listings associated to a Shop that are featured
 */
function findAllShopListingsFeatured(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/featured", parameters, "GET");
}
exports.findAllShopListingsFeatured = findAllShopListingsFeatured;
/**
 * Retrieves Listings associated to a Shop that are inactive
 */
function findAllShopListingsInactive(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/inactive", parameters, "GET");
}
exports.findAllShopListingsInactive = findAllShopListingsInactive;
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingInactive(parameters) {
    return httpClient_1.request("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET");
}
exports.getShopListingInactive = getShopListingInactive;
/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListings(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET");
}
exports.findAllShopSectionListings = findAllShopSectionListings;
/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListingsActive(parameters) {
    return httpClient_1.request("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET");
}
exports.findAllShopSectionListingsActive = findAllShopSectionListingsActive;
/**
 * Finds all listings in a given Cart
 */
function findAllCartListings(parameters) {
    return httpClient_1.request("/users/:user_id/carts/:cart_id/listings", parameters, "GET");
}
exports.findAllCartListings = findAllCartListings;
exports.Listing = {
    createListing: createListing,
    findAllFeaturedListings: findAllFeaturedListings,
    getListing: getListing,
    updateListing: updateListing,
    deleteListing: deleteListing,
    findAllListingActive: findAllListingActive,
    getInterestingListings: getInterestingListings,
    getTrendingListings: getTrendingListings,
    findBrowseSegmentListings: findBrowseSegmentListings,
    findAllListingsForFeaturedTreasuryId: findAllListingsForFeaturedTreasuryId,
    findAllActiveListingsForFeaturedTreasuryId: findAllActiveListingsForFeaturedTreasuryId,
    findAllCurrentFeaturedListings: findAllCurrentFeaturedListings,
    findAllReceiptListings: findAllReceiptListings,
    findAllShopListingsActive: findAllShopListingsActive,
    findAllShopListingsDraft: findAllShopListingsDraft,
    findAllShopListingsExpired: findAllShopListingsExpired,
    getShopListingExpired: getShopListingExpired,
    findAllShopListingsFeatured: findAllShopListingsFeatured,
    findAllShopListingsInactive: findAllShopListingsInactive,
    getShopListingInactive: getShopListingInactive,
    findAllShopSectionListings: findAllShopSectionListings,
    findAllShopSectionListingsActive: findAllShopSectionListingsActive,
    findAllCartListings: findAllCartListings
};
