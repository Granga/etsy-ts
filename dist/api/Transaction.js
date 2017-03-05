"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a Shop_Transaction by id.
     */
    getShop_Transaction(parameters) {
        return this.client.http("/transactions/:transaction_id", parameters, "GET");
    }
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    findAllListingTransactions(parameters) {
        return this.client.http("/listings/:listing_id/transactions", parameters, "GET");
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    findAllShop_Receipt2Transactions(parameters) {
        return this.client.http("/receipts/:receipt_id/transactions", parameters, "GET");
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    findAllShopTransactions(parameters) {
        return this.client.http("/shops/:shop_id/transactions", parameters, "GET");
    }
    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    findAllUserBuyerTransactions(parameters) {
        return this.client.http("/users/:user_id/transactions", parameters, "GET");
    }
}
exports.Transaction = Transaction;
