"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VariationsPropertySetOption {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all suggested property options for a given property.
     */
    findAllSuggestedPropertyOptions(parameters) {
        return this.client.http("/property_options/suggested", parameters, "GET");
    }
}
exports.VariationsPropertySetOption = VariationsPropertySetOption;
