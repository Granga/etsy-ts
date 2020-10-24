"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustmentItem = void 0;
var client_1 = require("../client/client");
//methods class
var PaymentAdjustmentItem = /** @class */ (function () {
    function PaymentAdjustmentItem() {
    }
    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    PaymentAdjustmentItem.findPaymentAdjustmentItems = function (parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
    };
    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    PaymentAdjustmentItem.findPaymentAdjustmentItem = function (parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id", parameters, "GET", options);
    };
    return PaymentAdjustmentItem;
}());
exports.PaymentAdjustmentItem = PaymentAdjustmentItem;
