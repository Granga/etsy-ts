"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
var client_1 = require("../client/client");
//methods class
var Listing = /** @class */ (function () {
    function Listing() {
    }
    /**
     * Creates a new Listing.
     */
    Listing.createListing = function (parameters, options) {
        return client_1.request("/listings", parameters, "POST", options);
    };
    /**
     * Finds all FeaturedTreasury listings.
     */
    Listing.findAllFeaturedListings = function (parameters, options) {
        return client_1.request("/featured_treasuries/listings", parameters, "GET", options);
    };
    /**
     * Retrieves a Listing by id.
     */
    Listing.getListing = function (parameters, options) {
        return client_1.request("/listings/:listing_id", parameters, "GET", options);
    };
    /**
     * Updates a Listing
     */
    Listing.updateListing = function (parameters, options) {
        return client_1.request("/listings/:listing_id", parameters, "PUT", options);
    };
    /**
     * Deletes a Listing
     */
    Listing.deleteListing = function (parameters, options) {
        return client_1.request("/listings/:listing_id", parameters, "DELETE", options);
    };
    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    Listing.findAllListingActive = function (parameters, options) {
        return client_1.request("/listings/active", parameters, "GET", options);
    };
    /**
     * Collects the list of interesting listings
     */
    Listing.getInterestingListings = function (parameters, options) {
        return client_1.request("/listings/interesting", parameters, "GET", options);
    };
    /**
     * Collects the list of listings used to generate the trending listing page
     */
    Listing.getTrendingListings = function (parameters, options) {
        return client_1.request("/listings/trending", parameters, "GET", options);
    };
    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    Listing.findAllListingsForFeaturedTreasuryId = function (parameters, options) {
        return client_1.request("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET", options);
    };
    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    Listing.findAllActiveListingsForFeaturedTreasuryId = function (parameters, options) {
        return client_1.request("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET", options);
    };
    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    Listing.findAllCurrentFeaturedListings = function (parameters, options) {
        return client_1.request("/featured_treasuries/listings/homepage_current", parameters, "GET", options);
    };
    /**
     * Finds all listings in a receipt
     */
    Listing.findAllReceiptListings = function (parameters, options) {
        return client_1.request("/receipts/:receipt_id/listings", parameters, "GET", options);
    };
    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    Listing.findAllShopListingsActive = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/active", parameters, "GET", options);
    };
    /**
     * Finds all of a Shop's draft listings
     */
    Listing.findAllShopListingsDraft = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/draft", parameters, "GET", options);
    };
    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    Listing.findAllShopListingsExpired = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/expired", parameters, "GET", options);
    };
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    Listing.getShopListingExpired = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET", options);
    };
    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    Listing.findAllShopListingsFeatured = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/featured", parameters, "GET", options);
    };
    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    Listing.findAllShopListingsInactive = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/inactive", parameters, "GET", options);
    };
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    Listing.getShopListingInactive = function (parameters, options) {
        return client_1.request("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET", options);
    };
    /**
     * Finds all listings within a shop section
     */
    Listing.findAllShopSectionListings = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET", options);
    };
    /**
     * Finds all listings within a shop section
     */
    Listing.findAllShopSectionListingsActive = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET", options);
    };
    /**
     * Finds all listings in a given Cart
     */
    Listing.findAllCartListings = function (parameters, options) {
        return client_1.request("/users/:user_id/carts/:cart_id/listings", parameters, "GET", options);
    };
    return Listing;
}());
exports.Listing = Listing;
