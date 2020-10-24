"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntry = void 0;
var client_1 = require("../client/client");
//methods class
var LedgerEntry = /** @class */ (function () {
    function LedgerEntry() {
    }
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    LedgerEntry.findLedgerEntries = function (parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries", parameters, "GET", options);
    };
    /**
     * Get a Shop Payment Account Ledger Entry
     */
    LedgerEntry.findLedgerEntry = function (parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET", options);
    };
    return LedgerEntry;
}());
exports.LedgerEntry = LedgerEntry;
