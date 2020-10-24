"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
var client_1 = require("../client/client");
//methods class
var Region = /** @class */ (function () {
    function Region() {
    }
    /**
     * Finds all Region.
     */
    Region.findAllRegion = function (parameters, options) {
        return client_1.request("/regions", parameters, "GET", options);
    };
    /**
     * Retrieves a Region by id.
     */
    Region.getRegion = function (parameters, options) {
        return client_1.request("/regions/:region_id", parameters, "GET", options);
    };
    /**
     *
     */
    Region.findEligibleRegions = function (parameters, options) {
        return client_1.request("/regions/eligible", parameters, "GET", options);
    };
    return Region;
}());
exports.Region = Region;
