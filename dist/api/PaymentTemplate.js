"use strict";
class PaymentTemplate {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    findShopPaymentTemplates(parameters) {
        return this.client.http("/shops/:shop_id/payment_templates", parameters, "GET");
    }
    /**
     * Creates a new PaymentTemplate
     */
    createShopPaymentTemplate(parameters) {
        return this.client.http("/shops/:shop_id/payment_templates", parameters, "POST");
    }
    /**
     * Updates a PaymentTemplate
     */
    updateShopPaymentTemplate(parameters) {
        return this.client.http("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT");
    }
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    findAllUserPaymentTemplates(parameters) {
        return this.client.http("/users/:user_id/payments/templates", parameters, "GET");
    }
}
exports.PaymentTemplate = PaymentTemplate;
