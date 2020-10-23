"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAccountLedgerEntry = void 0;
var client_1 = require("../client/client");
//methods class
var PaymentAccountLedgerEntry = /** @class */ (function () {
    function PaymentAccountLedgerEntry() {
    }
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    PaymentAccountLedgerEntry.findPaymentAccountEntries = function (parameters, options) {
        return client_1.request("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
    };
    return PaymentAccountLedgerEntry;
}());
exports.PaymentAccountLedgerEntry = PaymentAccountLedgerEntry;
