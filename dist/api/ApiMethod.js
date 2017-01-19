"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a list of all methods available.
*/
function getMethodTable(parameters) {
    return HttpRequest_1.request(parameters, '/', 'GET');
}
exports.getMethodTable = getMethodTable;
