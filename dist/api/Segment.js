"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Find all Browse Segments
 */
function findBrowseSegments(parameters, options) {
    return client_1.request("/segments", parameters, "GET", options);
}
exports.Segment = { findBrowseSegments: findBrowseSegments };
