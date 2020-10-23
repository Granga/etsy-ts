"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingOffering = void 0;
var client_1 = require("../client/client");
//methods class
var ListingOffering = /** @class */ (function () {
    function ListingOffering() {
    }
    /**
     * Get a specific offering for a listing
     */
    ListingOffering.getOffering = function (parameters, options) {
        return client_1.request("/listings/:listing_id/products/:product_id/offerings/:offering_id", parameters, "GET", options);
    };
    return ListingOffering;
}());
exports.ListingOffering = ListingOffering;
