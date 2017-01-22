"use strict";
class FavoriteListing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy(parameters) {
        return this.client.http("/listings/:listing_id/favored-by", parameters, "GET");
    }
    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings(parameters) {
        return this.client.http("/users/:user_id/favorites/listings", parameters, "GET");
    }
    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings(parameters) {
        return this.client.http("/users/:user_id/favorites/listings/:listing_id", parameters, "GET");
    }
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings(parameters) {
        return this.client.http("/users/:user_id/favorites/listings/:listing_id", parameters, "POST");
    }
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings(parameters) {
        return this.client.http("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE");
    }
}
exports.FavoriteListing = FavoriteListing;
