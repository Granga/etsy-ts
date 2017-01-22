"use strict";
class TreasuryListing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Add listing to a Treasury
     */
    addTreasuryListing(parameters) {
        return this.client.http("/treasuries/:treasury_key/listings", parameters, "POST");
    }
    /**
     * Remove listing from a Treasury
     */
    removeTreasuryListing(parameters) {
        return this.client.http("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE");
    }
}
exports.TreasuryListing = TreasuryListing;
