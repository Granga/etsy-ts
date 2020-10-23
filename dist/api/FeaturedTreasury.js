import { request } from "../client/client";
//methods class
export class FeaturedTreasury {
    /**
     * Finds all FeaturedTreasuries.
     */
    static findAllFeaturedTreasuries(parameters, options) {
        return request("/featured_treasuries", parameters, "GET", options);
    }
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    static getFeaturedTreasuryById(parameters, options) {
        return request("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
    }
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    static findAllFeaturedTreasuriesByOwner(parameters, options) {
        return request("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
    }
}
