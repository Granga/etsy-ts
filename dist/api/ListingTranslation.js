"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListingTranslation {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    getListingTranslation(parameters) {
        return this.client.http("/listings/:listing_id/translations/:language", parameters, "GET");
    }
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    createListingTranslation(parameters) {
        return this.client.http("/listings/:listing_id/translations/:language", parameters, "POST");
    }
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    updateListingTranslation(parameters) {
        return this.client.http("/listings/:listing_id/translations/:language", parameters, "PUT");
    }
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    deleteListingTranslation(parameters) {
        return this.client.http("/listings/:listing_id/translations/:language", parameters, "DELETE");
    }
}
exports.ListingTranslation = ListingTranslation;
