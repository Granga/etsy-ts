"use strict";
class Payment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Direct Checkout Payment
     */
    findPayment(parameters) {
        return this.client.http("/payments/:payment_id", parameters, "GET");
    }
    /**
     * Get a Payment from a Ledger Entry ID, if applicable
     */
    findPaymentForLedgerEntry(parameters) {
        return this.client.http("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET");
    }
    /**
     * Get a Payment by Shop Receipt ID
     */
    findShopPaymentByReceipt(parameters) {
        return this.client.http("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET");
    }
}
exports.Payment = Payment;
