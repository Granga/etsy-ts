import { request } from "../client/client";
//methods class
export class FavoriteListing {
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    static findAllListingFavoredBy(parameters, options) {
        return request("/listings/:listing_id/favored-by", parameters, "GET", options);
    }
    /**
     * Finds all favorite listings for a user
     */
    static findAllUserFavoriteListings(parameters, options) {
        return request("/users/:user_id/favorites/listings", parameters, "GET", options);
    }
    /**
     * Finds a favorite listing for a user
     */
    static findUserFavoriteListings(parameters, options) {
        return request("/users/:user_id/favorites/listings/:listing_id", parameters, "GET", options);
    }
    /**
     * Creates a new favorite listing for a user
     */
    static createUserFavoriteListings(parameters, options) {
        return request("/users/:user_id/favorites/listings/:listing_id", parameters, "POST", options);
    }
    /**
     * Delete a favorite listing for a user
     */
    static deleteUserFavoriteListings(parameters, options) {
        return request("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE", options);
    }
}
