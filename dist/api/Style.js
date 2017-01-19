"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieve all suggested styles.
*/
function findSuggestedStyles(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/styles', 'GET');
}
exports.findSuggestedStyles = findSuggestedStyles;
