"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
function findShopPaymentTemplates(parameters) {
    return httpClient_1.request("/shops/:shop_id/payment_templates", parameters, "GET");
}
exports.findShopPaymentTemplates = findShopPaymentTemplates;
/**
 * Creates a new PaymentTemplate
 */
function createShopPaymentTemplate(parameters) {
    return httpClient_1.request("/shops/:shop_id/payment_templates", parameters, "POST");
}
exports.createShopPaymentTemplate = createShopPaymentTemplate;
/**
 * Updates a PaymentTemplate
 */
function updateShopPaymentTemplate(parameters) {
    return httpClient_1.request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT");
}
exports.updateShopPaymentTemplate = updateShopPaymentTemplate;
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
function findAllUserPaymentTemplates(parameters) {
    return httpClient_1.request("/users/:user_id/payments/templates", parameters, "GET");
}
exports.findAllUserPaymentTemplates = findAllUserPaymentTemplates;
exports.PaymentTemplate = {
    findShopPaymentTemplates: findShopPaymentTemplates,
    createShopPaymentTemplate: createShopPaymentTemplate,
    updateShopPaymentTemplate: updateShopPaymentTemplate,
    findAllUserPaymentTemplates: findAllUserPaymentTemplates
};
