"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a Shop_Receipt2 by id.
 */
function getShop_Receipt2(parameters, options) {
    return client_1.request("/receipts/:receipt_id", parameters, "GET", options);
}
/**
 * Updates a Shop_Receipt2
 */
function updateReceipt(parameters, options) {
    return client_1.request("/receipts/:receipt_id", parameters, "PUT", options);
}
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
function findAllShopReceipts(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts", parameters, "GET", options);
}
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
function submitTracking(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST", options);
}
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
function findAllShopReceiptsByStatus(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts/:status", parameters, "GET", options);
}
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
function searchAllShopReceipts(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts/search", parameters, "GET", options);
}
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
function findAllUserBuyerReceipts(parameters, options) {
    return client_1.request("/users/:user_id/receipts", parameters, "GET", options);
}
exports.Receipt = {
    getShop_Receipt2: getShop_Receipt2,
    updateReceipt: updateReceipt,
    findAllShopReceipts: findAllShopReceipts,
    submitTracking: submitTracking,
    findAllShopReceiptsByStatus: findAllShopReceiptsByStatus,
    searchAllShopReceipts: searchAllShopReceipts,
    findAllUserBuyerReceipts: findAllUserBuyerReceipts
};
