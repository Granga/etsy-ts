import { request } from "../client/client";
//methods class
export class PropertyValue {
    /**
     * Get all of the attributes for a listing
     */
    static getAttributes(parameters, options) {
        return request("/listings/:listing_id/attributes", parameters, "GET", options);
    }
    /**
     * Get an attribute for a listing
     */
    static getAttribute(parameters, options) {
        return request("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
    }
    /**
     * Update or populate an attribute for a listing
     */
    static updateAttribute(parameters, options) {
        return request("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
    }
    /**
     * Delete an attribute for a listing
     */
    static deleteAttribute(parameters, options) {
        return request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
    }
}
