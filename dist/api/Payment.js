"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a Direct Checkout Payment
 */
function findPayment(parameters) {
    return httpClient_1.request("/payments/:payment_id", parameters, "GET");
}
exports.findPayment = findPayment;
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
function findPaymentForLedgerEntry(parameters) {
    return httpClient_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET");
}
exports.findPaymentForLedgerEntry = findPaymentForLedgerEntry;
/**
 * Get a Payment by Shop Receipt ID
 */
function findShopPaymentByReceipt(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET");
}
exports.findShopPaymentByReceipt = findShopPaymentByReceipt;
exports.Payment = {
    findPayment: findPayment,
    findPaymentForLedgerEntry: findPaymentForLedgerEntry,
    findShopPaymentByReceipt: findShopPaymentByReceipt
};
