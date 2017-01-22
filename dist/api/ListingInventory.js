"use strict";
class ListingInventory {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the inventory for a listing [developer preview - may be unstable]
     */
    getInventory(parameters) {
        return this.client.http("/listings/:listing_id/inventory", parameters, "GET");
    }
    /**
     * Update the inventory for a listing [developer preview - may be unstable]
     */
    updateInventory(parameters) {
        return this.client.http("/listings/:listing_id/inventory", parameters, "PUT");
    }
}
exports.ListingInventory = ListingInventory;
