"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a Shop_Transaction by id.
*/
function getShop_Transaction(parameters) {
    return HttpRequest_1.request(parameters, '/transactions/:transaction_id', 'GET');
}
exports.getShop_Transaction = getShop_Transaction;
/**
* Retrieves a set of Transaction objects associated to a Listing.
*/
function findAllListingTransactions(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/transactions', 'GET');
}
exports.findAllListingTransactions = findAllListingTransactions;
/**
* Retrieves a set of Transaction objects associated to a Shop_Receipt2.
*/
function findAllShop_Receipt2Transactions(parameters) {
    return HttpRequest_1.request(parameters, '/receipts/:receipt_id/transactions', 'GET');
}
exports.findAllShop_Receipt2Transactions = findAllShop_Receipt2Transactions;
/**
* Retrieves a set of Transaction objects associated to a Shop.
*/
function findAllShopTransactions(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/transactions', 'GET');
}
exports.findAllShopTransactions = findAllShopTransactions;
/**
* Retrieves a set of Transaction objects associated to a User.
*/
function findAllUserBuyerTransactions(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/transactions', 'GET');
}
exports.findAllUserBuyerTransactions = findAllUserBuyerTransactions;
