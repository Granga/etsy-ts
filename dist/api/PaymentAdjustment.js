"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustment = void 0;
var client_1 = require("../client/client");
//methods class
var PaymentAdjustment = /** @class */ (function () {
    function PaymentAdjustment() {
    }
    /**
     * Get a Payment Adjustments from a Payment Id
     */
    PaymentAdjustment.findPaymentAdjustments = function (parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments", parameters, "GET", options);
    };
    /**
     * Get an Etsy Payments Transaction Adjustment
     */
    PaymentAdjustment.findPaymentAdjustment = function (parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
    };
    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    PaymentAdjustment.findPaymentAdjustmentForLedgerEntry = function (parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    };
    /**
     * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
     */
    PaymentAdjustment.findPaymentAdjustmentForPaymentAccountLedgerEntry = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    };
    return PaymentAdjustment;
}());
exports.PaymentAdjustment = PaymentAdjustment;
