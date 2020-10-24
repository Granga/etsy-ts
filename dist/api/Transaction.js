"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var client_1 = require("../client/client");
//methods class
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    /**
     * Retrieves a Shop_Transaction by id.
     */
    Transaction.getShop_Transaction = function (parameters, options) {
        return client_1.request("/transactions/:transaction_id", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    Transaction.findAllListingTransactions = function (parameters, options) {
        return client_1.request("/listings/:listing_id/transactions", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    Transaction.findAllShop_Receipt2Transactions = function (parameters, options) {
        return client_1.request("/receipts/:receipt_id/transactions", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    Transaction.findAllShopTransactions = function (parameters, options) {
        return client_1.request("/shops/:shop_id/transactions", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    Transaction.findAllUserBuyerTransactions = function (parameters, options) {
        return client_1.request("/users/:user_id/transactions", parameters, "GET", options);
    };
    return Transaction;
}());
exports.Transaction = Transaction;
