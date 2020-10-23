import { request } from "../client/client";
//methods class
export class PaymentAdjustment {
    /**
     * Get a Payment Adjustments from a Payment Id
     */
    static findPaymentAdjustments(parameters, options) {
        return request("/payments/:payment_id/adjustments", parameters, "GET", options);
    }
    /**
     * Get an Etsy Payments Transaction Adjustment
     */
    static findPaymentAdjustment(parameters, options) {
        return request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
    }
    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    static findPaymentAdjustmentForLedgerEntry(parameters, options) {
        return request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    }
    /**
     * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
     */
    static findPaymentAdjustmentForPaymentAccountLedgerEntry(parameters, options) {
        return request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    }
}
