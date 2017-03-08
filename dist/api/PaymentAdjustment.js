"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a Payment Adjustments from a Payment Id
 */
function findPaymentAdjustments(parameters) {
    return httpClient_1.request("/payments/:payment_id/adjustments", parameters, "GET");
}
exports.findPaymentAdjustments = findPaymentAdjustments;
/**
 * Get a Direct Checkout Payment Adjustment
 */
function findPaymentAdjustment(parameters) {
    return httpClient_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET");
}
exports.findPaymentAdjustment = findPaymentAdjustment;
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForLedgerEntry(parameters) {
    return httpClient_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET");
}
exports.findPaymentAdjustmentForLedgerEntry = findPaymentAdjustmentForLedgerEntry;
exports.PaymentAdjustment = {
    findPaymentAdjustments: findPaymentAdjustments,
    findPaymentAdjustment: findPaymentAdjustment,
    findPaymentAdjustmentForLedgerEntry: findPaymentAdjustmentForLedgerEntry
};
