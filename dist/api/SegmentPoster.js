"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Find Browse SegmentPosters by Segment slug
 */
function findBrowseSegmentPosters(parameters) {
    return HttpRequest_1.request(parameters, '/segments/posters', 'GET');
}
exports.findBrowseSegmentPosters = findBrowseSegmentPosters;
