"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Find all Browse Segments
 */
function findBrowseSegments(parameters) {
    return HttpRequest_1.request(parameters, '/segments', 'GET');
}
exports.findBrowseSegments = findBrowseSegments;
