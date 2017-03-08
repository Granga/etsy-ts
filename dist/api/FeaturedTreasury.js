"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all FeaturedTreasuries.
 */
function findAllFeaturedTreasuries(parameters) {
    return httpClient_1.request("/featured_treasuries", parameters, "GET");
}
exports.findAllFeaturedTreasuries = findAllFeaturedTreasuries;
/**
 * Finds FeaturedTreasury by numeric ID.
 */
function getFeaturedTreasuryById(parameters) {
    return httpClient_1.request("/featured_treasuries/:featured_treasury_id", parameters, "GET");
}
exports.getFeaturedTreasuryById = getFeaturedTreasuryById;
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
function findAllFeaturedTreasuriesByOwner(parameters) {
    return httpClient_1.request("/featured_treasuries/owner/:owner_id", parameters, "GET");
}
exports.findAllFeaturedTreasuriesByOwner = findAllFeaturedTreasuriesByOwner;
exports.FeaturedTreasury = {
    findAllFeaturedTreasuries: findAllFeaturedTreasuries,
    getFeaturedTreasuryById: getFeaturedTreasuryById,
    findAllFeaturedTreasuriesByOwner: findAllFeaturedTreasuriesByOwner
};
