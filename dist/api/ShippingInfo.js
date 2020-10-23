import { request } from "../client/client";
//methods class
export class ShippingInfo {
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    static findAllListingShippingProfileEntries(parameters, options) {
        return request("/listings/:listing_id/shipping/info", parameters, "GET", options);
    }
    /**
     * Creates a new ShippingInfo.
     */
    static createShippingInfo(parameters, options) {
        return request("/listings/:listing_id/shipping/info", parameters, "POST", options);
    }
    /**
     * Retrieves a ShippingInfo by id.
     */
    static getShippingInfo(parameters, options) {
        return request("/shipping/info/:shipping_info_id", parameters, "GET", options);
    }
    /**
     * Updates a ShippingInfo with the given id.
     */
    static updateShippingInfo(parameters, options) {
        return request("/shipping/info/:shipping_info_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingInfo with the given id.
     */
    static deleteShippingInfo(parameters, options) {
        return request("/shipping/info/:shipping_info_id", parameters, "DELETE", options);
    }
}
