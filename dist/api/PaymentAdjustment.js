"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Get a Payment Adjustments from a Payment Id
 */
function findPaymentAdjustments(parameters) {
    return HttpRequest_1.request(parameters, '/payments/:payment_id/adjustments', 'GET');
}
exports.findPaymentAdjustments = findPaymentAdjustments;
/**
 * Get a Direct Checkout Payment Adjustment
 */
function findPaymentAdjustment(parameters) {
    return HttpRequest_1.request(parameters, '/payments/:payment_id/adjustments/:payment_adjustment_id', 'GET');
}
exports.findPaymentAdjustment = findPaymentAdjustment;
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForLedgerEntry(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment', 'GET');
}
exports.findPaymentAdjustmentForLedgerEntry = findPaymentAdjustmentForLedgerEntry;
