"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShippingTemplateEntry {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry(parameters) {
        return this.client.http("/shipping/templates/entries", parameters, "POST");
    }
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry(parameters) {
        return this.client.http("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET");
    }
    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry(parameters) {
        return this.client.http("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT");
    }
    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry(parameters) {
        return this.client.http("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE");
    }
}
exports.ShippingTemplateEntry = ShippingTemplateEntry;
