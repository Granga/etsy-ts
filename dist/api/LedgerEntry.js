"use strict";
class LedgerEntry {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    findLedgerEntries(parameters) {
        return this.client.http("/shops/:shop_id/ledger/entries", parameters, "GET");
    }
    /**
     * Get a Shop Payment Account Ledger Entry
     */
    findLedgerEntry(parameters) {
        return this.client.http("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET");
    }
}
exports.LedgerEntry = LedgerEntry;
