import { request } from "../client/client";
//methods class
export class Transaction {
    /**
     * Retrieves a Shop_Transaction by id.
     */
    static getShop_Transaction(parameters, options) {
        return request("/transactions/:transaction_id", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    static findAllListingTransactions(parameters, options) {
        return request("/listings/:listing_id/transactions", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    static findAllShop_Receipt2Transactions(parameters, options) {
        return request("/receipts/:receipt_id/transactions", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    static findAllShopTransactions(parameters, options) {
        return request("/shops/:shop_id/transactions", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    static findAllUserBuyerTransactions(parameters, options) {
        return request("/users/:user_id/transactions", parameters, "GET", options);
    }
}
