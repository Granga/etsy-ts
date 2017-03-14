"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get the possible properties of a taxonomy node [developer preview - may be unstable]
 */
function getTaxonomyNodeProperties(parameters, options) {
    return client_1.request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
}
exports.TaxonomyNodeProperty = { getTaxonomyNodeProperties: getTaxonomyNodeProperties };
