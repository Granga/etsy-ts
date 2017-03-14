"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
function findShopPaymentTemplates(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates", parameters, "GET", options);
}
/**
 * Creates a new PaymentTemplate
 */
function createShopPaymentTemplate(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates", parameters, "POST", options);
}
/**
 * Updates a PaymentTemplate
 */
function updateShopPaymentTemplate(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT", options);
}
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
function findAllUserPaymentTemplates(parameters, options) {
    return client_1.request("/users/:user_id/payments/templates", parameters, "GET", options);
}
exports.PaymentTemplate = {
    findShopPaymentTemplates: findShopPaymentTemplates,
    createShopPaymentTemplate: createShopPaymentTemplate,
    updateShopPaymentTemplate: updateShopPaymentTemplate,
    findAllUserPaymentTemplates: findAllUserPaymentTemplates
};
