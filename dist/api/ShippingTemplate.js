import { request } from "../client/client";
//methods class
export class ShippingTemplate {
    /**
     * Creates a new ShippingTemplate
     */
    static createShippingTemplate(parameters, options) {
        return request("/shipping/templates", parameters, "POST", options);
    }
    /**
     * Retrieves a ShippingTemplate by id.
     */
    static getShippingTemplate(parameters, options) {
        return request("/shipping/templates/:shipping_template_id", parameters, "GET", options);
    }
    /**
     * Updates a ShippingTemplate
     */
    static updateShippingTemplate(parameters, options) {
        return request("/shipping/templates/:shipping_template_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    static deleteShippingTemplate(parameters, options) {
        return request("/shipping/templates/:shipping_template_id", parameters, "DELETE", options);
    }
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    static findAllShippingTemplateEntries(parameters, options) {
        return request("/shipping/templates/:shipping_template_id/entries", parameters, "GET", options);
    }
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    static findAllUserShippingProfiles(parameters, options) {
        return request("/users/:user_id/shipping/templates", parameters, "GET", options);
    }
}
