import { request } from "../client/client";
//methods class
export class Listing {
    /**
     * Creates a new Listing.
     */
    static createListing(parameters, options) {
        return request("/listings", parameters, "POST", options);
    }
    /**
     * Finds all FeaturedTreasury listings.
     */
    static findAllFeaturedListings(parameters, options) {
        return request("/featured_treasuries/listings", parameters, "GET", options);
    }
    /**
     * Retrieves a Listing by id.
     */
    static getListing(parameters, options) {
        return request("/listings/:listing_id", parameters, "GET", options);
    }
    /**
     * Updates a Listing
     */
    static updateListing(parameters, options) {
        return request("/listings/:listing_id", parameters, "PUT", options);
    }
    /**
     * Deletes a Listing
     */
    static deleteListing(parameters, options) {
        return request("/listings/:listing_id", parameters, "DELETE", options);
    }
    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    static findAllListingActive(parameters, options) {
        return request("/listings/active", parameters, "GET", options);
    }
    /**
     * Collects the list of interesting listings
     */
    static getInterestingListings(parameters, options) {
        return request("/listings/interesting", parameters, "GET", options);
    }
    /**
     * Collects the list of listings used to generate the trending listing page
     */
    static getTrendingListings(parameters, options) {
        return request("/listings/trending", parameters, "GET", options);
    }
    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    static findAllListingsForFeaturedTreasuryId(parameters, options) {
        return request("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET", options);
    }
    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    static findAllActiveListingsForFeaturedTreasuryId(parameters, options) {
        return request("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET", options);
    }
    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    static findAllCurrentFeaturedListings(parameters, options) {
        return request("/featured_treasuries/listings/homepage_current", parameters, "GET", options);
    }
    /**
     * Finds all listings in a receipt
     */
    static findAllReceiptListings(parameters, options) {
        return request("/receipts/:receipt_id/listings", parameters, "GET", options);
    }
    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    static findAllShopListingsActive(parameters, options) {
        return request("/shops/:shop_id/listings/active", parameters, "GET", options);
    }
    /**
     * Finds all of a Shop's draft listings
     */
    static findAllShopListingsDraft(parameters, options) {
        return request("/shops/:shop_id/listings/draft", parameters, "GET", options);
    }
    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    static findAllShopListingsExpired(parameters, options) {
        return request("/shops/:shop_id/listings/expired", parameters, "GET", options);
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    static getShopListingExpired(parameters, options) {
        return request("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET", options);
    }
    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    static findAllShopListingsFeatured(parameters, options) {
        return request("/shops/:shop_id/listings/featured", parameters, "GET", options);
    }
    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    static findAllShopListingsInactive(parameters, options) {
        return request("/shops/:shop_id/listings/inactive", parameters, "GET", options);
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    static getShopListingInactive(parameters, options) {
        return request("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET", options);
    }
    /**
     * Finds all listings within a shop section
     */
    static findAllShopSectionListings(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET", options);
    }
    /**
     * Finds all listings within a shop section
     */
    static findAllShopSectionListingsActive(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET", options);
    }
    /**
     * Finds all listings in a given Cart
     */
    static findAllCartListings(parameters, options) {
        return request("/users/:user_id/carts/:cart_id/listings", parameters, "GET", options);
    }
}
