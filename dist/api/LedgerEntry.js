"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger's Entries
 */
function findLedgerEntries(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries", parameters, "GET", options);
}
/**
 * Get a Shop Payment Account Ledger Entry
 */
function findLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET", options);
}
exports.LedgerEntry = { findLedgerEntries: findLedgerEntries, findLedgerEntry: findLedgerEntry };
