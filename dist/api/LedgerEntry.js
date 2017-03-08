"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a Shop Payment Account Ledger's Entries
 */
function findLedgerEntries(parameters) {
    return httpClient_1.request("/shops/:shop_id/ledger/entries", parameters, "GET");
}
exports.findLedgerEntries = findLedgerEntries;
/**
 * Get a Shop Payment Account Ledger Entry
 */
function findLedgerEntry(parameters) {
    return httpClient_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET");
}
exports.findLedgerEntry = findLedgerEntry;
exports.LedgerEntry = {findLedgerEntries: findLedgerEntries, findLedgerEntry: findLedgerEntry};
