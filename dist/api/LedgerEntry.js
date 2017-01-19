"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a Shop Payment Account Ledger's Entries
*/
function findLedgerEntries(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/ledger/entries', 'GET');
}
exports.findLedgerEntries = findLedgerEntries;
/**
* Get a Shop Payment Account Ledger Entry
*/
function findLedgerEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/ledger/entries/:ledger_entry_id', 'GET');
}
exports.findLedgerEntry = findLedgerEntry;
