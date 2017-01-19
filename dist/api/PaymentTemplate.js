"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
function findShopPaymentTemplates(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/payment_templates', 'GET');
}
exports.findShopPaymentTemplates = findShopPaymentTemplates;
/**
 * Creates a new PaymentTemplate
 */
function createShopPaymentTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/payment_templates', 'POST');
}
exports.createShopPaymentTemplate = createShopPaymentTemplate;
/**
 * Updates a PaymentTemplate
 */
function updateShopPaymentTemplate(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/payment_templates/:payment_template_id', 'PUT');
}
exports.updateShopPaymentTemplate = updateShopPaymentTemplate;
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
function findAllUserPaymentTemplates(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/payments/templates', 'GET');
}
exports.findAllUserPaymentTemplates = findAllUserPaymentTemplates;
