"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
function getListingTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/translations/:language', 'GET');
}
exports.getListingTranslation = getListingTranslation;
/**
 * Creates a ListingTranslation by listing_id and language
 */
function createListingTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/translations/:language', 'POST');
}
exports.createListingTranslation = createListingTranslation;
/**
 * Updates a ListingTranslation by listing_id and language
 */
function updateListingTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/translations/:language', 'PUT');
}
exports.updateListingTranslation = updateListingTranslation;
/**
 * Deletes a ListingTranslation by listing_id and language
 */
function deleteListingTranslation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/translations/:language', 'DELETE');
}
exports.deleteListingTranslation = deleteListingTranslation;
