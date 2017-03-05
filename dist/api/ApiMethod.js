"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiMethod {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of all methods available.
     */
    getMethodTable(parameters) {
        return this.client.http("/", parameters, "GET");
    }
}
exports.ApiMethod = ApiMethod;
