"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
*/
function createListing(parameters) {
    return HttpRequest_1.request(parameters, '/listings', 'POST');
}
exports.createListing = createListing;
/**
* Finds all FeaturedTreasury listings.
*/
function findAllFeaturedListings(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/listings', 'GET');
}
exports.findAllFeaturedListings = findAllFeaturedListings;
/**
* Retrieves a Listing by id.
*/
function getListing(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id', 'GET');
}
exports.getListing = getListing;
/**
* Updates a Listing
*/
function updateListing(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id', 'PUT');
}
exports.updateListing = updateListing;
/**
* Deletes a Listing
*/
function deleteListing(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id', 'DELETE');
}
exports.deleteListing = deleteListing;
/**
* Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
*/
function findAllListingActive(parameters) {
    return HttpRequest_1.request(parameters, '/listings/active', 'GET');
}
exports.findAllListingActive = findAllListingActive;
/**
* Collects the list of interesting listings
*/
function getInterestingListings(parameters) {
    return HttpRequest_1.request(parameters, '/listings/interesting', 'GET');
}
exports.getInterestingListings = getInterestingListings;
/**
* Collects the list of listings used to generate the trending listing page
*/
function getTrendingListings(parameters) {
    return HttpRequest_1.request(parameters, '/listings/trending', 'GET');
}
exports.getTrendingListings = getTrendingListings;
/**
* Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
*/
function findBrowseSegmentListings(parameters) {
    return HttpRequest_1.request(parameters, '/segments/listings', 'GET');
}
exports.findBrowseSegmentListings = findBrowseSegmentListings;
/**
* Finds all listings for a certain FeaturedTreasury.
*/
function findAllListingsForFeaturedTreasuryId(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/:featured_treasury_id/listings', 'GET');
}
exports.findAllListingsForFeaturedTreasuryId = findAllListingsForFeaturedTreasuryId;
/**
* Finds all active listings for a certain FeaturedTreasury.
*/
function findAllActiveListingsForFeaturedTreasuryId(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/:featured_treasury_id/listings/active', 'GET');
}
exports.findAllActiveListingsForFeaturedTreasuryId = findAllActiveListingsForFeaturedTreasuryId;
/**
* Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
*/
function findAllCurrentFeaturedListings(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/listings/homepage_current', 'GET');
}
exports.findAllCurrentFeaturedListings = findAllCurrentFeaturedListings;
/**
* Finds all listings in a receipt
*/
function findAllReceiptListings(parameters) {
    return HttpRequest_1.request(parameters, '/receipts/:receipt_id/listings', 'GET');
}
exports.findAllReceiptListings = findAllReceiptListings;
/**
* Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
*/
function findAllShopListingsActive(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/active', 'GET');
}
exports.findAllShopListingsActive = findAllShopListingsActive;
/**
* Finds all of a Shop's draft listings
*/
function findAllShopListingsDraft(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/draft', 'GET');
}
exports.findAllShopListingsDraft = findAllShopListingsDraft;
/**
* Retrieves Listings associated to a Shop that are expired
*/
function findAllShopListingsExpired(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/expired', 'GET');
}
exports.findAllShopListingsExpired = findAllShopListingsExpired;
/**
* Retrieves a Listing associated to a Shop that is inactive
*/
function getShopListingExpired(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/expired/:listing_id', 'GET');
}
exports.getShopListingExpired = getShopListingExpired;
/**
* Retrieves Listings associated to a Shop that are featured
*/
function findAllShopListingsFeatured(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/featured', 'GET');
}
exports.findAllShopListingsFeatured = findAllShopListingsFeatured;
/**
* Retrieves Listings associated to a Shop that are inactive
*/
function findAllShopListingsInactive(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/inactive', 'GET');
}
exports.findAllShopListingsInactive = findAllShopListingsInactive;
/**
* Retrieves a Listing associated to a Shop that is inactive
*/
function getShopListingInactive(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/listings/inactive/:listing_id', 'GET');
}
exports.getShopListingInactive = getShopListingInactive;
/**
* Finds all listings within a shop section
*/
function findAllShopSectionListings(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/listings', 'GET');
}
exports.findAllShopSectionListings = findAllShopSectionListings;
/**
* Finds all listings within a shop section
*/
function findAllShopSectionListingsActive(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id/listings/active', 'GET');
}
exports.findAllShopSectionListingsActive = findAllShopSectionListingsActive;
/**
* Finds all listings in a given Cart
*/
function findAllCartListings(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/carts/:cart_id/listings', 'GET');
}
exports.findAllCartListings = findAllCartListings;
