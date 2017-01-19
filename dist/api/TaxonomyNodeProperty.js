"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get the possible properties of a taxonomy node [developer preview - may be unstable]
*/
function getTaxonomyNodeProperties(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/seller/:taxonomy_id/properties', 'GET');
}
exports.getTaxonomyNodeProperties = getTaxonomyNodeProperties;
