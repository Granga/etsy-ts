import { request } from "../client/client";
//methods class
export class LedgerEntry {
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    static findLedgerEntries(parameters, options) {
        return request("/shops/:shop_id/ledger/entries", parameters, "GET", options);
    }
    /**
     * Get a Shop Payment Account Ledger Entry
     */
    static findLedgerEntry(parameters, options) {
        return request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET", options);
    }
}
