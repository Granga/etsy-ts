"use strict";
class Region {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Region.
     */
    findAllRegion(parameters) {
        return this.client.http("/regions", parameters, "GET");
    }
    /**
     * Retrieves a Region by id.
     */
    getRegion(parameters) {
        return this.client.http("/regions/:region_id", parameters, "GET");
    }
    /**
     *
     */
    findEligibleRegions(parameters) {
        return this.client.http("/regions/eligible", parameters, "GET");
    }
}
exports.Region = Region;
