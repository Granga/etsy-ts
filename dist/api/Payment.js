"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get a Direct Checkout Payment
 */
function findPayment(parameters) {
    return HttpRequest_1.request(parameters, '/payments/:payment_id', 'GET');
}
exports.findPayment = findPayment;
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
function findPaymentForLedgerEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/ledger/entries/:ledger_entry_id/payment', 'GET');
}
exports.findPaymentForLedgerEntry = findPaymentForLedgerEntry;
/**
 * Get a Payment by Shop Receipt ID
 */
function findShopPaymentByReceipt(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts/:receipt_id/payments', 'GET');
}
exports.findShopPaymentByReceipt = findShopPaymentByReceipt;
