"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxonomyNodeProperty {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the possible properties of a taxonomy node [developer preview - may be unstable]
     */
    getTaxonomyNodeProperties(parameters) {
        return this.client.http("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET");
    }
}
exports.TaxonomyNodeProperty = TaxonomyNodeProperty;
