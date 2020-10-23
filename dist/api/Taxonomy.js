import { request } from "../client/client";
//methods class
export class Taxonomy {
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    static getBuyerTaxonomy(parameters, options) {
        return request("/taxonomy/buyer/get", parameters, "GET", options);
    }
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    static getSellerTaxonomy(parameters, options) {
        return request("/taxonomy/seller/get", parameters, "GET", options);
    }
    /**
     * Get the current version of the seller taxonomy
     */
    static getSellerTaxonomyVersion(parameters, options) {
        return request("/taxonomy/seller/version", parameters, "GET", options);
    }
}
