"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingTranslation = void 0;
var client_1 = require("../client/client");
//methods class
var ListingTranslation = /** @class */ (function () {
    function ListingTranslation() {
    }
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    ListingTranslation.getListingTranslation = function (parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "GET", options);
    };
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    ListingTranslation.createListingTranslation = function (parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "POST", options);
    };
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    ListingTranslation.updateListingTranslation = function (parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "PUT", options);
    };
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    ListingTranslation.deleteListingTranslation = function (parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
    };
    return ListingTranslation;
}());
exports.ListingTranslation = ListingTranslation;
