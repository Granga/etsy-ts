"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a specific offering for a listing
 */
function getProduct(parameters, options) {
    return client_1.request("/listings/:listing_id/products/:product_id", parameters, "GET", options);
}
exports.ListingProduct = { getProduct: getProduct };
