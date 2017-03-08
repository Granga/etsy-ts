"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieve all suggested styles.
 */
function findSuggestedStyles(parameters) {
    return httpClient_1.request("/taxonomy/styles", parameters, "GET");
}
exports.findSuggestedStyles = findSuggestedStyles;
exports.Style = {findSuggestedStyles: findSuggestedStyles};
