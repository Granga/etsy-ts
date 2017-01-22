"use strict";
class Receipt {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    getShop_Receipt2(parameters) {
        return this.client.http("/receipts/:receipt_id", parameters, "GET");
    }
    /**
     * Updates a Shop_Receipt2
     */
    updateReceipt(parameters) {
        return this.client.http("/receipts/:receipt_id", parameters, "PUT");
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    findAllShopReceipts(parameters) {
        return this.client.http("/shops/:shop_id/receipts", parameters, "GET");
    }
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    submitTracking(parameters) {
        return this.client.http("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST");
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    findAllShopReceiptsByStatus(parameters) {
        return this.client.http("/shops/:shop_id/receipts/:status", parameters, "GET");
    }
    /**
     * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
     */
    findAllOpenLocalDeliveryReceipts(parameters) {
        return this.client.http("/shops/:shop_id/receipts/local-delivery", parameters, "GET");
    }
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    searchAllShopReceipts(parameters) {
        return this.client.http("/shops/:shop_id/receipts/search", parameters, "GET");
    }
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    findAllUserBuyerReceipts(parameters) {
        return this.client.http("/users/:user_id/receipts", parameters, "GET");
    }
}
exports.Receipt = Receipt;
