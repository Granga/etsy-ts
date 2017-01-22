"use strict";
class PaymentAdjustment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Payment Adjustments from a Payment Id
     */
    findPaymentAdjustments(parameters) {
        return this.client.http("/payments/:payment_id/adjustments", parameters, "GET");
    }
    /**
     * Get a Direct Checkout Payment Adjustment
     */
    findPaymentAdjustment(parameters) {
        return this.client.http("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET");
    }
    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    findPaymentAdjustmentForLedgerEntry(parameters) {
        return this.client.http("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET");
    }
}
exports.PaymentAdjustment = PaymentAdjustment;
