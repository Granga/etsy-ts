"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get the listing variations available for a listing.
*/
function getListingVariations(parameters, options) {
    return client_1.request("/listings/:listing_id/variations", parameters, "GET", options);
}
/**
* Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
*/
function createListingVariations(parameters, options) {
    return client_1.request("/listings/:listing_id/variations", parameters, "POST", options);
}
/**
* Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
*/
function updateListingVariations(parameters, options) {
    return client_1.request("/listings/:listing_id/variations", parameters, "PUT", options);
}
/**
* Add a new listing variation for a listing.
*/
function createListingVariation(parameters, options) {
    return client_1.request("/listings/:listing_id/variations/:property_id", parameters, "POST", options);
}
/**
* Update a listing variation for a listing.
*/
function updateListingVariation(parameters, options) {
    return client_1.request("/listings/:listing_id/variations/:property_id", parameters, "PUT", options);
}
/**
* Remove a listing variation for a listing.
*/
function deleteListingVariation(parameters, options) {
    return client_1.request("/listings/:listing_id/variations/:property_id", parameters, "DELETE", options);
}
exports.VariationsProperty = { getListingVariations: getListingVariations, createListingVariations: createListingVariations, updateListingVariations: updateListingVariations, createListingVariation: createListingVariation, updateListingVariation: updateListingVariation, deleteListingVariation: deleteListingVariation };
