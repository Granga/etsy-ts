"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VariationsPropertySet {
    constructor(client) {
        this.client = client;
    }
    /**
     * Find the property set for the category id
     */
    findPropertySet(parameters) {
        return this.client.http("/property_sets", parameters, "GET");
    }
}
exports.VariationsPropertySet = VariationsPropertySet;
