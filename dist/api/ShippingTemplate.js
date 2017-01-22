"use strict";
class ShippingTemplate {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new ShippingTemplate
     */
    createShippingTemplate(parameters) {
        return this.client.http("/shipping/templates", parameters, "POST");
    }
    /**
     * Retrieves a ShippingTemplate by id.
     */
    getShippingTemplate(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id", parameters, "GET");
    }
    /**
     * Updates a ShippingTemplate
     */
    updateShippingTemplate(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id", parameters, "PUT");
    }
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    deleteShippingTemplate(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id", parameters, "DELETE");
    }
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    findAllShippingTemplateEntries(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id/entries", parameters, "GET");
    }
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    findAllUserShippingProfiles(parameters) {
        return this.client.http("/users/:user_id/shipping/templates", parameters, "GET");
    }
}
exports.ShippingTemplate = ShippingTemplate;
