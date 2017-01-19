"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get Direct Checkout Payment Adjustment Items
 */
function findPaymentAdjustmentItem(parameters) {
    return HttpRequest_1.request(parameters, '/payments/:payment_id/adjustments/:payment_adjustment_id/items', 'GET');
}
exports.findPaymentAdjustmentItem = findPaymentAdjustmentItem;
