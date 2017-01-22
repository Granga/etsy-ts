"use strict";
class VariationsPropertySetOptionModifier {
    constructor(client) {
        this.client = client;
    }
    /**
     * Add a value for a given property.
     */
    getPropertyOptionModifier(parameters) {
        return this.client.http("/property_options/modifiers", parameters, "GET");
    }
}
exports.VariationsPropertySetOptionModifier = VariationsPropertySetOptionModifier;
