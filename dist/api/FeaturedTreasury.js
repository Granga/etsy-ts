"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Finds all FeaturedTreasuries.
*/
function findAllFeaturedTreasuries(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries', 'GET');
}
exports.findAllFeaturedTreasuries = findAllFeaturedTreasuries;
/**
* Finds FeaturedTreasury by numeric ID.
*/
function getFeaturedTreasuryById(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/:featured_treasury_id', 'GET');
}
exports.getFeaturedTreasuryById = getFeaturedTreasuryById;
/**
* Finds all FeaturedTreasury by numeric owner_id.
*/
function findAllFeaturedTreasuriesByOwner(parameters) {
    return HttpRequest_1.request(parameters, '/featured_treasuries/owner/:owner_id', 'GET');
}
exports.findAllFeaturedTreasuriesByOwner = findAllFeaturedTreasuriesByOwner;
