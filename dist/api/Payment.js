import { request } from "../client/client";
//methods class
export class Payment {
    /**
     * Get an Etsy Payments Transaction
     */
    static findPayment(parameters, options) {
        return request("/payments/:payment_id", parameters, "GET", options);
    }
    /**
     * Get a Payment from a Ledger Entry ID, if applicable
     */
    static findPaymentForLedgerEntry(parameters, options) {
        return request("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET", options);
    }
    /**
     * Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
     */
    static findPaymentForPaymentAccountLedgerEntry(parameters, options) {
        return request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment", parameters, "GET", options);
    }
    /**
     * Get a Payment by Shop Receipt ID
     */
    static findShopPaymentByReceipt(parameters, options) {
        return request("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET", options);
    }
}
