"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Add a value for a given property.
*/
function getPropertyOptionModifier(parameters) {
    return HttpRequest_1.request(parameters, '/property_options/modifiers', 'GET');
}
exports.getPropertyOptionModifier = getPropertyOptionModifier;
