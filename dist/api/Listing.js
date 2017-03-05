"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Listing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
     */
    createListing(parameters) {
        return this.client.http("/listings", parameters, "POST");
    }
    /**
     * Finds all FeaturedTreasury listings.
     */
    findAllFeaturedListings(parameters) {
        return this.client.http("/featured_treasuries/listings", parameters, "GET");
    }
    /**
     * Retrieves a Listing by id.
     */
    getListing(parameters) {
        return this.client.http("/listings/:listing_id", parameters, "GET");
    }
    /**
     * Updates a Listing
     */
    updateListing(parameters) {
        return this.client.http("/listings/:listing_id", parameters, "PUT");
    }
    /**
     * Deletes a Listing
     */
    deleteListing(parameters) {
        return this.client.http("/listings/:listing_id", parameters, "DELETE");
    }
    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    findAllListingActive(parameters) {
        return this.client.http("/listings/active", parameters, "GET");
    }
    /**
     * Collects the list of interesting listings
     */
    getInterestingListings(parameters) {
        return this.client.http("/listings/interesting", parameters, "GET");
    }
    /**
     * Collects the list of listings used to generate the trending listing page
     */
    getTrendingListings(parameters) {
        return this.client.http("/listings/trending", parameters, "GET");
    }
    /**
     * Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
     */
    findBrowseSegmentListings(parameters) {
        return this.client.http("/segments/listings", parameters, "GET");
    }
    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    findAllListingsForFeaturedTreasuryId(parameters) {
        return this.client.http("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET");
    }
    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    findAllActiveListingsForFeaturedTreasuryId(parameters) {
        return this.client.http("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET");
    }
    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    findAllCurrentFeaturedListings(parameters) {
        return this.client.http("/featured_treasuries/listings/homepage_current", parameters, "GET");
    }
    /**
     * Finds all listings in a receipt
     */
    findAllReceiptListings(parameters) {
        return this.client.http("/receipts/:receipt_id/listings", parameters, "GET");
    }
    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    findAllShopListingsActive(parameters) {
        return this.client.http("/shops/:shop_id/listings/active", parameters, "GET");
    }
    /**
     * Finds all of a Shop's draft listings
     */
    findAllShopListingsDraft(parameters) {
        return this.client.http("/shops/:shop_id/listings/draft", parameters, "GET");
    }
    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    findAllShopListingsExpired(parameters) {
        return this.client.http("/shops/:shop_id/listings/expired", parameters, "GET");
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    getShopListingExpired(parameters) {
        return this.client.http("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET");
    }
    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    findAllShopListingsFeatured(parameters) {
        return this.client.http("/shops/:shop_id/listings/featured", parameters, "GET");
    }
    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    findAllShopListingsInactive(parameters) {
        return this.client.http("/shops/:shop_id/listings/inactive", parameters, "GET");
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    getShopListingInactive(parameters) {
        return this.client.http("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET");
    }
    /**
     * Finds all listings within a shop section
     */
    findAllShopSectionListings(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET");
    }
    /**
     * Finds all listings within a shop section
     */
    findAllShopSectionListingsActive(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET");
    }
    /**
     * Finds all listings in a given Cart
     */
    findAllCartListings(parameters) {
        return this.client.http("/users/:user_id/carts/:cart_id/listings", parameters, "GET");
    }
}
exports.Listing = Listing;
