"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger's Entries
 */
function findPaymentAccountEntries(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
}
exports.PaymentAccountLedgerEntry = { findPaymentAccountEntries: findPaymentAccountEntries };
