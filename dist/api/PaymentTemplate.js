"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTemplate = void 0;
var client_1 = require("../client/client");
//methods class
var PaymentTemplate = /** @class */ (function () {
    function PaymentTemplate() {
    }
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    PaymentTemplate.findShopPaymentTemplates = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates", parameters, "GET", options);
    };
    /**
     * Creates a new PaymentTemplate
     */
    PaymentTemplate.createShopPaymentTemplate = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates", parameters, "POST", options);
    };
    /**
     * Updates a PaymentTemplate
     */
    PaymentTemplate.updateShopPaymentTemplate = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT", options);
    };
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    PaymentTemplate.findAllUserPaymentTemplates = function (parameters, options) {
        return client_1.request("/users/:user_id/payments/templates", parameters, "GET", options);
    };
    return PaymentTemplate;
}());
exports.PaymentTemplate = PaymentTemplate;
