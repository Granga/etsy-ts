"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Finds all suggested property options for a given property.
 */
function findAllSuggestedPropertyOptions(parameters, options) {
    return client_1.request("/property_options/suggested", parameters, "GET", options);
}
exports.VariationsPropertySetOption = { findAllSuggestedPropertyOptions: findAllSuggestedPropertyOptions };
