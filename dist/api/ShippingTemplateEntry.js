import { request } from "../client/client";
//methods class
export class ShippingTemplateEntry {
    /**
     * Creates a new ShippingTemplateEntry
     */
    static createShippingTemplateEntry(parameters, options) {
        return request("/shipping/templates/entries", parameters, "POST", options);
    }
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    static getShippingTemplateEntry(parameters, options) {
        return request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
    }
    /**
     * Updates a ShippingTemplateEntry
     */
    static updateShippingTemplateEntry(parameters, options) {
        return request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingTemplateEntry
     */
    static deleteShippingTemplateEntry(parameters, options) {
        return request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
    }
}
