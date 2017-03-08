"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Add a value for a given property.
 */
function getPropertyOptionModifier(parameters) {
    return httpClient_1.request("/property_options/modifiers", parameters, "GET");
}
exports.getPropertyOptionModifier = getPropertyOptionModifier;
exports.VariationsPropertySetOptionModifier = {getPropertyOptionModifier: getPropertyOptionModifier};
