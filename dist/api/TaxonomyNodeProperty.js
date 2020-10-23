import { request } from "../client/client";
//methods class
export class TaxonomyNodeProperty {
    /**
     * Get the possible properties of a taxonomy node
     */
    static getTaxonomyNodeProperties(parameters, options) {
        return request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
    }
}
