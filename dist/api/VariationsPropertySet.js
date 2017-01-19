"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Find the property set for the category id
*/
function findPropertySet(parameters) {
    return HttpRequest_1.request(parameters, '/property_sets', 'GET');
}
exports.findPropertySet = findPropertySet;
