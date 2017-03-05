"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VariationsProperty {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the listing variations available for a listing.
     */
    getListingVariations(parameters) {
        return this.client.http("/listings/:listing_id/variations", parameters, "GET");
    }
    /**
     * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
     */
    createListingVariations(parameters) {
        return this.client.http("/listings/:listing_id/variations", parameters, "POST");
    }
    /**
     * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
     */
    updateListingVariations(parameters) {
        return this.client.http("/listings/:listing_id/variations", parameters, "PUT");
    }
    /**
     * Add a new listing variation for a listing.
     */
    createListingVariation(parameters) {
        return this.client.http("/listings/:listing_id/variations/:property_id", parameters, "POST");
    }
    /**
     * Update a listing variation for a listing.
     */
    updateListingVariation(parameters) {
        return this.client.http("/listings/:listing_id/variations/:property_id", parameters, "PUT");
    }
    /**
     * Remove a listing variation for a listing.
     */
    deleteListingVariation(parameters) {
        return this.client.http("/listings/:listing_id/variations/:property_id", parameters, "DELETE");
    }
}
exports.VariationsProperty = VariationsProperty;
