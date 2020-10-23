import { request } from "../client/client";
//methods class
export class ApiMethod {
    /**
     * Get a list of all methods available.
     */
    static getMethodTable(parameters, options) {
        return request("/", parameters, "GET", options);
    }
}
