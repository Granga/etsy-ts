"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a guest by ID.
*/
function getGuest(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id', 'GET');
}
exports.getGuest = getGuest;
/**
* A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
*/
function generateGuest(parameters) {
    return HttpRequest_1.request(parameters, '/guests/generator', 'GET');
}
exports.generateGuest = generateGuest;
/**
* Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
*/
function claimGuest(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/claim', 'POST');
}
exports.claimGuest = claimGuest;
/**
* Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
*/
function mergeGuest(parameters) {
    return HttpRequest_1.request(parameters, '/guests/:guest_id/merge', 'POST');
}
exports.mergeGuest = mergeGuest;
