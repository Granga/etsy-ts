"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Add a value for a given property.
 */
function getPropertyOptionModifier(parameters, options) {
    return client_1.request("/property_options/modifiers", parameters, "GET", options);
}
exports.VariationsPropertySetOptionModifier = { getPropertyOptionModifier: getPropertyOptionModifier };
