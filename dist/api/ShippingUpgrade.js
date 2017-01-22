"use strict";
class ShippingUpgrade {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades(parameters) {
        return this.client.http("/listings/:listing_id/shipping/upgrades", parameters, "GET");
    }
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade(parameters) {
        return this.client.http("/listings/:listing_id/shipping/upgrades", parameters, "POST");
    }
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade(parameters) {
        return this.client.http("/listings/:listing_id/shipping/upgrades", parameters, "PUT");
    }
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade(parameters) {
        return this.client.http("/listings/:listing_id/shipping/upgrades", parameters, "DELETE");
    }
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET");
    }
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST");
    }
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT");
    }
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade(parameters) {
        return this.client.http("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE");
    }
}
exports.ShippingUpgrade = ShippingUpgrade;
