"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Finds all Region.
*/
function findAllRegion(parameters, options) {
    return client_1.request("/regions", parameters, "GET", options);
}
/**
* Retrieves a Region by id.
*/
function getRegion(parameters, options) {
    return client_1.request("/regions/:region_id", parameters, "GET", options);
}
/**
*
*/
function findEligibleRegions(parameters, options) {
    return client_1.request("/regions/eligible", parameters, "GET", options);
}
exports.Region = { findAllRegion: findAllRegion, getRegion: getRegion, findEligibleRegions: findEligibleRegions };
