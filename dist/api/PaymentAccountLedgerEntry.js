import { request } from "../client/client";
//methods class
export class PaymentAccountLedgerEntry {
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    static findPaymentAccountEntries(parameters, options) {
        return request("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
    }
}
