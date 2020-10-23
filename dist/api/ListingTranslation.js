import { request } from "../client/client";
//methods class
export class ListingTranslation {
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    static getListingTranslation(parameters, options) {
        return request("/listings/:listing_id/translations/:language", parameters, "GET", options);
    }
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    static createListingTranslation(parameters, options) {
        return request("/listings/:listing_id/translations/:language", parameters, "POST", options);
    }
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    static updateListingTranslation(parameters, options) {
        return request("/listings/:listing_id/translations/:language", parameters, "PUT", options);
    }
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    static deleteListingTranslation(parameters, options) {
        return request("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
    }
}
