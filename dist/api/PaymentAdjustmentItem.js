"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get Etsy Payments Transaction Adjustment Items
 */
function findPaymentAdjustmentItem(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
}
exports.PaymentAdjustmentItem = { findPaymentAdjustmentItem: findPaymentAdjustmentItem };
