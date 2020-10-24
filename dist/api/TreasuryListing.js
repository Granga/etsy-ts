"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasuryListing = void 0;
var client_1 = require("../client/client");
//methods class
var TreasuryListing = /** @class */ (function () {
    function TreasuryListing() {
    }
    /**
     * Add listing to a Treasury
     */
    TreasuryListing.addTreasuryListing = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key/listings", parameters, "POST", options);
    };
    /**
     * Remove listing from a Treasury
     */
    TreasuryListing.removeTreasuryListing = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
    };
    return TreasuryListing;
}());
exports.TreasuryListing = TreasuryListing;
