"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
var client_1 = require("../client/client");
//methods class
var Receipt = /** @class */ (function () {
    function Receipt() {
    }
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    Receipt.getShop_Receipt2 = function (parameters, options) {
        return client_1.request("/receipts/:receipt_id", parameters, "GET", options);
    };
    /**
     * Updates a Shop_Receipt2
     */
    Receipt.updateReceipt = function (parameters, options) {
        return client_1.request("/receipts/:receipt_id", parameters, "PUT", options);
    };
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    Receipt.findAllShopReceipts = function (parameters, options) {
        return client_1.request("/shops/:shop_id/receipts", parameters, "GET", options);
    };
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    Receipt.submitTracking = function (parameters, options) {
        return client_1.request("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST", options);
    };
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    Receipt.findAllShopReceiptsByStatus = function (parameters, options) {
        return client_1.request("/shops/:shop_id/receipts/:status", parameters, "GET", options);
    };
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    Receipt.searchAllShopReceipts = function (parameters, options) {
        return client_1.request("/shops/:shop_id/receipts/search", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    Receipt.findAllUserBuyerReceipts = function (parameters, options) {
        return client_1.request("/users/:user_id/receipts", parameters, "GET", options);
    };
    return Receipt;
}());
exports.Receipt = Receipt;
