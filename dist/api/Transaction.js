"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a Shop_Transaction by id.
 */
function getShop_Transaction(parameters) {
    return httpClient_1.request("/transactions/:transaction_id", parameters, "GET");
}
exports.getShop_Transaction = getShop_Transaction;
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
function findAllListingTransactions(parameters) {
    return httpClient_1.request("/listings/:listing_id/transactions", parameters, "GET");
}
exports.findAllListingTransactions = findAllListingTransactions;
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
function findAllShop_Receipt2Transactions(parameters) {
    return httpClient_1.request("/receipts/:receipt_id/transactions", parameters, "GET");
}
exports.findAllShop_Receipt2Transactions = findAllShop_Receipt2Transactions;
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
function findAllShopTransactions(parameters) {
    return httpClient_1.request("/shops/:shop_id/transactions", parameters, "GET");
}
exports.findAllShopTransactions = findAllShopTransactions;
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
function findAllUserBuyerTransactions(parameters) {
    return httpClient_1.request("/users/:user_id/transactions", parameters, "GET");
}
exports.findAllUserBuyerTransactions = findAllUserBuyerTransactions;
exports.Transaction = {
    getShop_Transaction: getShop_Transaction,
    findAllListingTransactions: findAllListingTransactions,
    findAllShop_Receipt2Transactions: findAllShop_Receipt2Transactions,
    findAllShopTransactions: findAllShopTransactions,
    findAllUserBuyerTransactions: findAllUserBuyerTransactions
};
