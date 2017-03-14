"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a list of all methods available.
 */
function getMethodTable(parameters, options) {
    return client_1.request("/", parameters, "GET", options);
}
exports.ApiMethod = { getMethodTable: getMethodTable };
