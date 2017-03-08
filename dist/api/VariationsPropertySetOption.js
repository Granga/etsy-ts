"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all suggested property options for a given property.
 */
function findAllSuggestedPropertyOptions(parameters) {
    return httpClient_1.request("/property_options/suggested", parameters, "GET");
}
exports.findAllSuggestedPropertyOptions = findAllSuggestedPropertyOptions;
exports.VariationsPropertySetOption = {findAllSuggestedPropertyOptions: findAllSuggestedPropertyOptions};
