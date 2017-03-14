"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Finds all FeaturedTreasuries.
 */
function findAllFeaturedTreasuries(parameters, options) {
    return client_1.request("/featured_treasuries", parameters, "GET", options);
}
/**
 * Finds FeaturedTreasury by numeric ID.
 */
function getFeaturedTreasuryById(parameters, options) {
    return client_1.request("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
}
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
function findAllFeaturedTreasuriesByOwner(parameters, options) {
    return client_1.request("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
}
exports.FeaturedTreasury = { findAllFeaturedTreasuries: findAllFeaturedTreasuries, getFeaturedTreasuryById: getFeaturedTreasuryById, findAllFeaturedTreasuriesByOwner: findAllFeaturedTreasuriesByOwner };
