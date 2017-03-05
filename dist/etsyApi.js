"use strict";
const ApiMethod_1 = require("./api/ApiMethod");
class EtsyApiClient {
    constructor() {
        this.defaultOptions = {};
    }
    get apiMethod() {
        return this._apiMethod || new ApiMethod_1.ApiMethod(this.defaultOptions, this.request);
    }
}
exports.EtsyApiClient = EtsyApiClient;
