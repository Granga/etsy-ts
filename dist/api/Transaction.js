"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a Shop_Transaction by id.
 */
function getShop_Transaction(parameters, options) {
    return client_1.request("/transactions/:transaction_id", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
function findAllListingTransactions(parameters, options) {
    return client_1.request("/listings/:listing_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
function findAllShop_Receipt2Transactions(parameters, options) {
    return client_1.request("/receipts/:receipt_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
function findAllShopTransactions(parameters, options) {
    return client_1.request("/shops/:shop_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
function findAllUserBuyerTransactions(parameters, options) {
    return client_1.request("/users/:user_id/transactions", parameters, "GET", options);
}
exports.Transaction = {
    getShop_Transaction: getShop_Transaction,
    findAllListingTransactions: findAllListingTransactions,
    findAllShop_Receipt2Transactions: findAllShop_Receipt2Transactions,
    findAllShopTransactions: findAllShopTransactions,
    findAllUserBuyerTransactions: findAllUserBuyerTransactions
};
