"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a list of all methods available.
 */
function getMethodTable(parameters) {
    return httpClient_1.request("/", parameters, "GET");
}
exports.getMethodTable = getMethodTable;
exports.ApiMethod = {getMethodTable: getMethodTable};
