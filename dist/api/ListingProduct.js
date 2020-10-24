"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingProduct = void 0;
var client_1 = require("../client/client");
//methods class
var ListingProduct = /** @class */ (function () {
    function ListingProduct() {
    }
    /**
     * Get a specific offering for a listing
     */
    ListingProduct.getProduct = function (parameters, options) {
        return client_1.request("/listings/:listing_id/products/:product_id", parameters, "GET", options);
    };
    return ListingProduct;
}());
exports.ListingProduct = ListingProduct;
