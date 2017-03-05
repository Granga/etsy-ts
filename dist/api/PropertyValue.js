"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PropertyValue {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all of the attributes for a listing [developer preview - may be unstable]
     */
    getAttributes(parameters) {
        return this.client.http("/listings/:listing_id/attributes", parameters, "GET");
    }
    /**
     * Get an attribute for a listing [developer preview - may be unstable]
     */
    getAttribute(parameters) {
        return this.client.http("/listings/:listing_id/attributes/:property_id", parameters, "GET");
    }
    /**
     * Update or populate an attribute for a listing [developer preview - may be unstable]
     */
    updateAttribute(parameters) {
        return this.client.http("/listings/:listing_id/attributes/:property_id", parameters, "PUT");
    }
    /**
     * Delete an attribute for a listing [developer preview - may be unstable]
     */
    deleteAttribute(parameters) {
        return this.client.http("/listings/:listing_id/attributes/:property_id", parameters, "DELETE");
    }
}
exports.PropertyValue = PropertyValue;
