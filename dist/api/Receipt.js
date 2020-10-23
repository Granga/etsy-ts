import { request } from "../client/client";
//methods class
export class Receipt {
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    static getShop_Receipt2(parameters, options) {
        return request("/receipts/:receipt_id", parameters, "GET", options);
    }
    /**
     * Updates a Shop_Receipt2
     */
    static updateReceipt(parameters, options) {
        return request("/receipts/:receipt_id", parameters, "PUT", options);
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    static findAllShopReceipts(parameters, options) {
        return request("/shops/:shop_id/receipts", parameters, "GET", options);
    }
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    static submitTracking(parameters, options) {
        return request("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST", options);
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    static findAllShopReceiptsByStatus(parameters, options) {
        return request("/shops/:shop_id/receipts/:status", parameters, "GET", options);
    }
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    static searchAllShopReceipts(parameters, options) {
        return request("/shops/:shop_id/receipts/search", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    static findAllUserBuyerReceipts(parameters, options) {
        return request("/users/:user_id/receipts", parameters, "GET", options);
    }
}
