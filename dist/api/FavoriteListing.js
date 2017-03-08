"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of FavoriteListing objects associated to a Listing.
 */
function findAllListingFavoredBy(parameters) {
    return httpClient_1.request("/listings/:listing_id/favored-by", parameters, "GET");
}
exports.findAllListingFavoredBy = findAllListingFavoredBy;
/**
 * Finds all favorite listings for a user
 */
function findAllUserFavoriteListings(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/listings", parameters, "GET");
}
exports.findAllUserFavoriteListings = findAllUserFavoriteListings;
/**
 * Finds a favorite listing for a user
 */
function findUserFavoriteListings(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "GET");
}
exports.findUserFavoriteListings = findUserFavoriteListings;
/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteListings(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "POST");
}
exports.createUserFavoriteListings = createUserFavoriteListings;
/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteListings(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE");
}
exports.deleteUserFavoriteListings = deleteUserFavoriteListings;
exports.FavoriteListing = {
    findAllListingFavoredBy: findAllListingFavoredBy,
    findAllUserFavoriteListings: findAllUserFavoriteListings,
    findUserFavoriteListings: findUserFavoriteListings,
    createUserFavoriteListings: createUserFavoriteListings,
    deleteUserFavoriteListings: deleteUserFavoriteListings
};
