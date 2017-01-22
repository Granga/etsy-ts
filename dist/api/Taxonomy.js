"use strict";
class Taxonomy {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    getBuyerTaxonomy(parameters) {
        return this.client.http("/taxonomy/buyer/get", parameters, "GET");
    }
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    getSellerTaxonomy(parameters) {
        return this.client.http("/taxonomy/seller/get", parameters, "GET");
    }
}
exports.Taxonomy = Taxonomy;
