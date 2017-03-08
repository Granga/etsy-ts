"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Find Browse SegmentPosters by Segment slug
 */
function findBrowseSegmentPosters(parameters) {
    return httpClient_1.request("/segments/posters", parameters, "GET");
}
exports.findBrowseSegmentPosters = findBrowseSegmentPosters;
exports.SegmentPoster = {findBrowseSegmentPosters: findBrowseSegmentPosters};
