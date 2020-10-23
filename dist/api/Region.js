import { request } from "../client/client";
//methods class
export class Region {
    /**
     * Finds all Region.
     */
    static findAllRegion(parameters, options) {
        return request("/regions", parameters, "GET", options);
    }
    /**
     * Retrieves a Region by id.
     */
    static getRegion(parameters, options) {
        return request("/regions/:region_id", parameters, "GET", options);
    }
    /**
     *
     */
    static findEligibleRegions(parameters, options) {
        return request("/regions/eligible", parameters, "GET", options);
    }
}
