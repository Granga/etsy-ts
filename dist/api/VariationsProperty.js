"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get the listing variations available for a listing.
*/
function getListingVariations(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations', 'GET');
}
exports.getListingVariations = getListingVariations;
/**
* Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
*/
function createListingVariations(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations', 'POST');
}
exports.createListingVariations = createListingVariations;
/**
* Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
*/
function updateListingVariations(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations', 'PUT');
}
exports.updateListingVariations = updateListingVariations;
/**
* Add a new listing variation for a listing.
*/
function createListingVariation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations/:property_id', 'POST');
}
exports.createListingVariation = createListingVariation;
/**
* Update a listing variation for a listing.
*/
function updateListingVariation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations/:property_id', 'PUT');
}
exports.updateListingVariation = updateListingVariation;
/**
* Remove a listing variation for a listing.
*/
function deleteListingVariation(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/variations/:property_id', 'DELETE');
}
exports.deleteListingVariation = deleteListingVariation;
