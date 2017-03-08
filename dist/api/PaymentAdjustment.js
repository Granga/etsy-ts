"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Get a Payment Adjustments from a Payment Id
*/
function findPaymentAdjustments(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments", parameters, "GET", options);
}
/**
* Get a Direct Checkout Payment Adjustment
*/
function findPaymentAdjustment(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
}
/**
* Get a Payment Adjustment from a Ledger Entry ID, if applicable
*/
function findPaymentAdjustmentForLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
}
exports.PaymentAdjustment = { findPaymentAdjustments: findPaymentAdjustments, findPaymentAdjustment: findPaymentAdjustment, findPaymentAdjustmentForLedgerEntry: findPaymentAdjustmentForLedgerEntry };
