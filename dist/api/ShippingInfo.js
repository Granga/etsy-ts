"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShippingInfo {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    findAllListingShippingProfileEntries(parameters) {
        return this.client.http("/listings/:listing_id/shipping/info", parameters, "GET");
    }
    /**
     * Creates a new ShippingInfo.
     */
    createShippingInfo(parameters) {
        return this.client.http("/listings/:listing_id/shipping/info", parameters, "POST");
    }
    /**
     * Retrieves a ShippingInfo by id.
     */
    getShippingInfo(parameters) {
        return this.client.http("/shipping/info/:shipping_info_id", parameters, "GET");
    }
    /**
     * Updates a ShippingInfo with the given id.
     */
    updateShippingInfo(parameters) {
        return this.client.http("/shipping/info/:shipping_info_id", parameters, "PUT");
    }
    /**
     * Deletes the ShippingInfo with the given id.
     */
    deleteShippingInfo(parameters) {
        return this.client.http("/shipping/info/:shipping_info_id", parameters, "DELETE");
    }
}
exports.ShippingInfo = ShippingInfo;
