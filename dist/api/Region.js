"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Finds all Region.
 */
function findAllRegion(parameters) {
    return HttpRequest_1.request(parameters, '/regions', 'GET');
}
exports.findAllRegion = findAllRegion;
/**
 * Retrieves a Region by id.
 */
function getRegion(parameters) {
    return HttpRequest_1.request(parameters, '/regions/:region_id', 'GET');
}
exports.getRegion = getRegion;
/**
 *
 */
function findEligibleRegions(parameters) {
    return HttpRequest_1.request(parameters, '/regions/eligible', 'GET');
}
exports.findEligibleRegions = findEligibleRegions;
