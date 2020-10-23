import { request } from "../client/client";
//methods class
export class PaymentTemplate {
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    static findShopPaymentTemplates(parameters, options) {
        return request("/shops/:shop_id/payment_templates", parameters, "GET", options);
    }
    /**
     * Creates a new PaymentTemplate
     */
    static createShopPaymentTemplate(parameters, options) {
        return request("/shops/:shop_id/payment_templates", parameters, "POST", options);
    }
    /**
     * Updates a PaymentTemplate
     */
    static updateShopPaymentTemplate(parameters, options) {
        return request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT", options);
    }
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    static findAllUserPaymentTemplates(parameters, options) {
        return request("/users/:user_id/payments/templates", parameters, "GET", options);
    }
}
