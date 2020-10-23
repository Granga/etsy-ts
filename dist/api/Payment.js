"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var client_1 = require("../client/client");
//methods class
var Payment = /** @class */ (function () {
    function Payment() {
    }
    /**
     * Get an Etsy Payments Transaction
     */
    Payment.findPayment = function (parameters, options) {
        return client_1.request("/payments/:payment_id", parameters, "GET", options);
    };
    /**
     * Get a Payment from a Ledger Entry ID, if applicable
     */
    Payment.findPaymentForLedgerEntry = function (parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET", options);
    };
    /**
     * Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
     */
    Payment.findPaymentForPaymentAccountLedgerEntry = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment", parameters, "GET", options);
    };
    /**
     * Get a Payment by Shop Receipt ID
     */
    Payment.findShopPaymentByReceipt = function (parameters, options) {
        return client_1.request("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET", options);
    };
    return Payment;
}());
exports.Payment = Payment;
