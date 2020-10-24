"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingInventory = void 0;
var client_1 = require("../client/client");
//methods class
var ListingInventory = /** @class */ (function () {
    function ListingInventory() {
    }
    /**
     * Get the inventory for a listing
     */
    ListingInventory.getInventory = function (parameters, options) {
        return client_1.request("/listings/:listing_id/inventory", parameters, "GET", options);
    };
    /**
     * Update the inventory for a listing
     */
    ListingInventory.updateInventory = function (parameters, options) {
        return client_1.request("/listings/:listing_id/inventory", parameters, "PUT", options);
    };
    return ListingInventory;
}());
exports.ListingInventory = ListingInventory;
