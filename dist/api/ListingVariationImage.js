import { request } from "../client/client";
//methods class
export class ListingVariationImage {
    /**
     * Gets all variation images on a listing
     */
    static getVariationImages(parameters, options) {
        return request("/listings/:listing_id/variation-images", parameters, "GET", options);
    }
    /**
     * Creates variation images on a listing
     */
    static updateVariationImages(parameters, options) {
        return request("/listings/:listing_id/variation-images", parameters, "POST", options);
    }
}
