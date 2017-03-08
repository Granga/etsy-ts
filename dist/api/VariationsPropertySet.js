"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Find the property set for the category id
 */
function findPropertySet(parameters) {
    return httpClient_1.request("/property_sets", parameters, "GET");
}
exports.findPropertySet = findPropertySet;
exports.VariationsPropertySet = {findPropertySet: findPropertySet};
