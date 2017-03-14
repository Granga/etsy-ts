"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Find the property set for the category id
 */
function findPropertySet(parameters, options) {
    return client_1.request("/property_sets", parameters, "GET", options);
}
exports.VariationsPropertySet = { findPropertySet: findPropertySet };
