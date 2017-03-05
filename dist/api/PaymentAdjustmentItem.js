"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentAdjustmentItem {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get Direct Checkout Payment Adjustment Items
     */
    findPaymentAdjustmentItem(parameters) {
        return this.client.http("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET");
    }
}
exports.PaymentAdjustmentItem = PaymentAdjustmentItem;
