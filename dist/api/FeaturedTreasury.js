"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FeaturedTreasury {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries(parameters) {
        return this.client.http("/featured_treasuries", parameters, "GET");
    }
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById(parameters) {
        return this.client.http("/featured_treasuries/:featured_treasury_id", parameters, "GET");
    }
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner(parameters) {
        return this.client.http("/featured_treasuries/owner/:owner_id", parameters, "GET");
    }
}
exports.FeaturedTreasury = FeaturedTreasury;
