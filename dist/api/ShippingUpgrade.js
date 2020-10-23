import { request } from "../client/client";
//methods class
export class ShippingUpgrade {
    /**
     * Get the shipping upgrades available for a listing.
     */
    static getListingShippingUpgrades(parameters, options) {
        return request("/listings/:listing_id/shipping/upgrades", parameters, "GET", options);
    }
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    static createListingShippingUpgrade(parameters, options) {
        return request("/listings/:listing_id/shipping/upgrades", parameters, "POST", options);
    }
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    static updateListingShippingUpgrade(parameters, options) {
        return request("/listings/:listing_id/shipping/upgrades", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    static deleteListingShippingUpgrade(parameters, options) {
        return request("/listings/:listing_id/shipping/upgrades", parameters, "DELETE", options);
    }
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    static findAllShippingTemplateUpgrades(parameters, options) {
        return request("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET", options);
    }
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    static createShippingTemplateUpgrade(parameters, options) {
        return request("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST", options);
    }
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    static updateShippingTemplateUpgrade(parameters, options) {
        return request("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    static deleteShippingTemplateUpgrade(parameters, options) {
        return request("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE", options);
    }
}
