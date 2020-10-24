"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedTreasury = void 0;
var client_1 = require("../client/client");
//methods class
var FeaturedTreasury = /** @class */ (function () {
    function FeaturedTreasury() {
    }
    /**
     * Finds all FeaturedTreasuries.
     */
    FeaturedTreasury.findAllFeaturedTreasuries = function (parameters, options) {
        return client_1.request("/featured_treasuries", parameters, "GET", options);
    };
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    FeaturedTreasury.getFeaturedTreasuryById = function (parameters, options) {
        return client_1.request("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
    };
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    FeaturedTreasury.findAllFeaturedTreasuriesByOwner = function (parameters, options) {
        return client_1.request("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
    };
    return FeaturedTreasury;
}());
exports.FeaturedTreasury = FeaturedTreasury;
