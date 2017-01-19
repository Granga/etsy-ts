"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Finds all suggested property options for a given property.
*/
function findAllSuggestedPropertyOptions(parameters) {
    return HttpRequest_1.request(parameters, '/property_options/suggested', 'GET');
}
exports.findAllSuggestedPropertyOptions = findAllSuggestedPropertyOptions;
