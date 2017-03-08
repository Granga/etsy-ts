"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get Direct Checkout Payment Adjustment Items
 */
function findPaymentAdjustmentItem(parameters) {
    return httpClient_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET");
}
exports.findPaymentAdjustmentItem = findPaymentAdjustmentItem;
exports.PaymentAdjustmentItem = {findPaymentAdjustmentItem: findPaymentAdjustmentItem};
