"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all Region.
 */
function findAllRegion(parameters) {
    return httpClient_1.request("/regions", parameters, "GET");
}
exports.findAllRegion = findAllRegion;
/**
 * Retrieves a Region by id.
 */
function getRegion(parameters) {
    return httpClient_1.request("/regions/:region_id", parameters, "GET");
}
exports.getRegion = getRegion;
/**
 *
 */
function findEligibleRegions(parameters) {
    return httpClient_1.request("/regions/eligible", parameters, "GET");
}
exports.findEligibleRegions = findEligibleRegions;
exports.Region = {findAllRegion: findAllRegion, getRegion: getRegion, findEligibleRegions: findEligibleRegions};
