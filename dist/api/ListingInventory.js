import { request } from "../client/client";
//methods class
export class ListingInventory {
    /**
     * Get the inventory for a listing
     */
    static getInventory(parameters, options) {
        return request("/listings/:listing_id/inventory", parameters, "GET", options);
    }
    /**
     * Update the inventory for a listing
     */
    static updateInventory(parameters, options) {
        return request("/listings/:listing_id/inventory", parameters, "PUT", options);
    }
}
