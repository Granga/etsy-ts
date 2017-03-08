"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieve all suggested styles.
*/
function findSuggestedStyles(parameters, options) {
    return client_1.request("/taxonomy/styles", parameters, "GET", options);
}
exports.Style = { findSuggestedStyles: findSuggestedStyles };
