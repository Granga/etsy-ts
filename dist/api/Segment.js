"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Find all Browse Segments
 */
function findBrowseSegments(parameters) {
    return httpClient_1.request("/segments", parameters, "GET");
}
exports.findBrowseSegments = findBrowseSegments;
exports.Segment = {findBrowseSegments: findBrowseSegments};
