"use strict";
const ApiMethod_1 = require("./ApiMethod");
class EtsyApi {
    constructor(client) {
        this.client = client;
    }
    get ApiMethod() {
        return this._apiMethod || new ApiMethod_1.ApiMethod(this.client);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EtsyApi;
