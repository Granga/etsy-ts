"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
function getListingTranslation(parameters) {
    return httpClient_1.request("/listings/:listing_id/translations/:language", parameters, "GET");
}
exports.getListingTranslation = getListingTranslation;
/**
 * Creates a ListingTranslation by listing_id and language
 */
function createListingTranslation(parameters) {
    return httpClient_1.request("/listings/:listing_id/translations/:language", parameters, "POST");
}
exports.createListingTranslation = createListingTranslation;
/**
 * Updates a ListingTranslation by listing_id and language
 */
function updateListingTranslation(parameters) {
    return httpClient_1.request("/listings/:listing_id/translations/:language", parameters, "PUT");
}
exports.updateListingTranslation = updateListingTranslation;
/**
 * Deletes a ListingTranslation by listing_id and language
 */
function deleteListingTranslation(parameters) {
    return httpClient_1.request("/listings/:listing_id/translations/:language", parameters, "DELETE");
}
exports.deleteListingTranslation = deleteListingTranslation;
exports.ListingTranslation = {
    getListingTranslation: getListingTranslation,
    createListingTranslation: createListingTranslation,
    updateListingTranslation: updateListingTranslation,
    deleteListingTranslation: deleteListingTranslation
};
