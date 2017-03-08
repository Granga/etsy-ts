"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get the possible properties of a taxonomy node [developer preview - may be unstable]
 */
function getTaxonomyNodeProperties(parameters) {
    return httpClient_1.request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET");
}
exports.getTaxonomyNodeProperties = getTaxonomyNodeProperties;
exports.TaxonomyNodeProperty = {getTaxonomyNodeProperties: getTaxonomyNodeProperties};
