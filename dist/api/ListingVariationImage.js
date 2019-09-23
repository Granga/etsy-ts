"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Gets all variation images on a listing
 */
function getVariationImages(parameters, options) {
    return client_1.request("/listings/:listing_id/variation-images", parameters, "GET", options);
}
/**
 * Creates variation images on a listing
 */
function updateVariationImages(parameters, options) {
    return client_1.request("/listings/:listing_id/variation-images", parameters, "POST", options);
}
exports.ListingVariationImage = { getVariationImages: getVariationImages, updateVariationImages: updateVariationImages };
