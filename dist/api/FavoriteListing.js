"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteListing = void 0;
var client_1 = require("../client/client");
//methods class
var FavoriteListing = /** @class */ (function () {
    function FavoriteListing() {
    }
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    FavoriteListing.findAllListingFavoredBy = function (parameters, options) {
        return client_1.request("/listings/:listing_id/favored-by", parameters, "GET", options);
    };
    /**
     * Finds all favorite listings for a user
     */
    FavoriteListing.findAllUserFavoriteListings = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/listings", parameters, "GET", options);
    };
    /**
     * Finds a favorite listing for a user
     */
    FavoriteListing.findUserFavoriteListings = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "GET", options);
    };
    /**
     * Creates a new favorite listing for a user
     */
    FavoriteListing.createUserFavoriteListings = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "POST", options);
    };
    /**
     * Delete a favorite listing for a user
     */
    FavoriteListing.deleteUserFavoriteListings = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE", options);
    };
    return FavoriteListing;
}());
exports.FavoriteListing = FavoriteListing;
