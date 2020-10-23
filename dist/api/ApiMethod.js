"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMethod = void 0;
var client_1 = require("../client/client");
//methods class
var ApiMethod = /** @class */ (function () {
    function ApiMethod() {
    }
    /**
     * Get a list of all methods available.
     */
    ApiMethod.getMethodTable = function (parameters, options) {
        return client_1.request("/", parameters, "GET", options);
    };
    return ApiMethod;
}());
exports.ApiMethod = ApiMethod;
