"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get a Direct Checkout Payment
*/
function findPayment(parameters, options) {
    return client_1.request("/payments/:payment_id", parameters, "GET", options);
}
/**
* Get a Payment from a Ledger Entry ID, if applicable
*/
function findPaymentForLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET", options);
}
/**
* Get a Payment by Shop Receipt ID
*/
function findShopPaymentByReceipt(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET", options);
}
exports.Payment = { findPayment: findPayment, findPaymentForLedgerEntry: findPaymentForLedgerEntry, findShopPaymentByReceipt: findShopPaymentByReceipt };
