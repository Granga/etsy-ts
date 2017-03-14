"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of FavoriteListing objects associated to a Listing.
 */
function findAllListingFavoredBy(parameters, options) {
    return client_1.request("/listings/:listing_id/favored-by", parameters, "GET", options);
}
/**
 * Finds all favorite listings for a user
 */
function findAllUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings", parameters, "GET", options);
}
/**
 * Finds a favorite listing for a user
 */
function findUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "GET", options);
}
/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "POST", options);
}
/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteListings(parameters, options) {
    return client_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE", options);
}
exports.FavoriteListing = {
    findAllListingFavoredBy: findAllListingFavoredBy,
    findAllUserFavoriteListings: findAllUserFavoriteListings,
    findUserFavoriteListings: findUserFavoriteListings,
    createUserFavoriteListings: createUserFavoriteListings,
    deleteUserFavoriteListings: deleteUserFavoriteListings
};
