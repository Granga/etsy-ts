"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a specific offering for a listing
 */
function getOffering(parameters, options) {
    return client_1.request("/listings/:listing_id/products/:product_id/offerings/:offering_id", parameters, "GET", options);
}
exports.ListingOffering = { getOffering: getOffering };
