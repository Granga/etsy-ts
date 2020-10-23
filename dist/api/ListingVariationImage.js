"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingVariationImage = void 0;
var client_1 = require("../client/client");
//methods class
var ListingVariationImage = /** @class */ (function () {
    function ListingVariationImage() {
    }
    /**
     * Gets all variation images on a listing
     */
    ListingVariationImage.getVariationImages = function (parameters, options) {
        return client_1.request("/listings/:listing_id/variation-images", parameters, "GET", options);
    };
    /**
     * Creates variation images on a listing
     */
    ListingVariationImage.updateVariationImages = function (parameters, options) {
        return client_1.request("/listings/:listing_id/variation-images", parameters, "POST", options);
    };
    return ListingVariationImage;
}());
exports.ListingVariationImage = ListingVariationImage;
