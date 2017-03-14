"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
function getListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ListingTranslation by listing_id and language
 */
function createListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ListingTranslation by listing_id and language
 */
function updateListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ListingTranslation by listing_id and language
 */
function deleteListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
}
exports.ListingTranslation = {
    getListingTranslation: getListingTranslation,
    createListingTranslation: createListingTranslation,
    updateListingTranslation: updateListingTranslation,
    deleteListingTranslation: deleteListingTranslation
};
