"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Find Browse SegmentPosters by Segment slug
*/
function findBrowseSegmentPosters(parameters, options) {
    return client_1.request("/segments/posters", parameters, "GET", options);
}
exports.SegmentPoster = { findBrowseSegmentPosters: findBrowseSegmentPosters };
