"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
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
* Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
*/
function findBrowseSegmentListings(parameters, options) {
    return client_1.request("/segments/listings", parameters, "GET", options);
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
exports.Listing = { createListing: createListing, findAllFeaturedListings: findAllFeaturedListings, getListing: getListing, updateListing: updateListing, deleteListing: deleteListing, findAllListingActive: findAllListingActive, getInterestingListings: getInterestingListings, getTrendingListings: getTrendingListings, findBrowseSegmentListings: findBrowseSegmentListings, findAllListingsForFeaturedTreasuryId: findAllListingsForFeaturedTreasuryId, findAllActiveListingsForFeaturedTreasuryId: findAllActiveListingsForFeaturedTreasuryId, findAllCurrentFeaturedListings: findAllCurrentFeaturedListings, findAllReceiptListings: findAllReceiptListings, findAllShopListingsActive: findAllShopListingsActive, findAllShopListingsDraft: findAllShopListingsDraft, findAllShopListingsExpired: findAllShopListingsExpired, getShopListingExpired: getShopListingExpired, findAllShopListingsFeatured: findAllShopListingsFeatured, findAllShopListingsInactive: findAllShopListingsInactive, getShopListingInactive: getShopListingInactive, findAllShopSectionListings: findAllShopSectionListings, findAllShopSectionListingsActive: findAllShopSectionListingsActive, findAllCartListings: findAllCartListings };
