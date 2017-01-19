"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a set of FavoriteListing objects associated to a Listing.
*/
function findAllListingFavoredBy(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/favored-by', 'GET');
}
exports.findAllListingFavoredBy = findAllListingFavoredBy;
/**
* Finds all favorite listings for a user
*/
function findAllUserFavoriteListings(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/listings', 'GET');
}
exports.findAllUserFavoriteListings = findAllUserFavoriteListings;
/**
* Finds a favorite listing for a user
*/
function findUserFavoriteListings(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/listings/:listing_id', 'GET');
}
exports.findUserFavoriteListings = findUserFavoriteListings;
/**
* Creates a new favorite listing for a user
*/
function createUserFavoriteListings(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/listings/:listing_id', 'POST');
}
exports.createUserFavoriteListings = createUserFavoriteListings;
/**
* Delete a favorite listing for a user
*/
function deleteUserFavoriteListings(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/listings/:listing_id', 'DELETE');
}
exports.deleteUserFavoriteListings = deleteUserFavoriteListings;
