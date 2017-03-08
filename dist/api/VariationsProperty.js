"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get the listing variations available for a listing.
 */
function getListingVariations(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations", parameters, "GET");
}
exports.getListingVariations = getListingVariations;
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
function createListingVariations(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations", parameters, "POST");
}
exports.createListingVariations = createListingVariations;
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
function updateListingVariations(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations", parameters, "PUT");
}
exports.updateListingVariations = updateListingVariations;
/**
 * Add a new listing variation for a listing.
 */
function createListingVariation(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations/:property_id", parameters, "POST");
}
exports.createListingVariation = createListingVariation;
/**
 * Update a listing variation for a listing.
 */
function updateListingVariation(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations/:property_id", parameters, "PUT");
}
exports.updateListingVariation = updateListingVariation;
/**
 * Remove a listing variation for a listing.
 */
function deleteListingVariation(parameters) {
    return httpClient_1.request("/listings/:listing_id/variations/:property_id", parameters, "DELETE");
}
exports.deleteListingVariation = deleteListingVariation;
exports.VariationsProperty = {
    getListingVariations: getListingVariations,
    createListingVariations: createListingVariations,
    updateListingVariations: updateListingVariations,
    createListingVariation: createListingVariation,
    updateListingVariation: updateListingVariation,
    deleteListingVariation: deleteListingVariation
};
