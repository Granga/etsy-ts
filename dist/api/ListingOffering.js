import { request } from "../client/client";
//methods class
export class ListingOffering {
    /**
     * Get a specific offering for a listing
     */
    static getOffering(parameters, options) {
        return request("/listings/:listing_id/products/:product_id/offerings/:offering_id", parameters, "GET", options);
    }
}
