import { request } from "../client/client";
//methods class
export class ListingProduct {
    /**
     * Get a specific offering for a listing
     */
    static getProduct(parameters, options) {
        return request("/listings/:listing_id/products/:product_id", parameters, "GET", options);
    }
}
