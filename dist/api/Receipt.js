"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a Shop_Receipt2 by id.
 */
function getShop_Receipt2(parameters) {
    return httpClient_1.request("/receipts/:receipt_id", parameters, "GET");
}
exports.getShop_Receipt2 = getShop_Receipt2;
/**
 * Updates a Shop_Receipt2
 */
function updateReceipt(parameters) {
    return httpClient_1.request("/receipts/:receipt_id", parameters, "PUT");
}
exports.updateReceipt = updateReceipt;
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
function findAllShopReceipts(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts", parameters, "GET");
}
exports.findAllShopReceipts = findAllShopReceipts;
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
function submitTracking(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST");
}
exports.submitTracking = submitTracking;
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
function findAllShopReceiptsByStatus(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts/:status", parameters, "GET");
}
exports.findAllShopReceiptsByStatus = findAllShopReceiptsByStatus;
/**
 * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
 */
function findAllOpenLocalDeliveryReceipts(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts/local-delivery", parameters, "GET");
}
exports.findAllOpenLocalDeliveryReceipts = findAllOpenLocalDeliveryReceipts;
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
function searchAllShopReceipts(parameters) {
    return httpClient_1.request("/shops/:shop_id/receipts/search", parameters, "GET");
}
exports.searchAllShopReceipts = searchAllShopReceipts;
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
function findAllUserBuyerReceipts(parameters) {
    return httpClient_1.request("/users/:user_id/receipts", parameters, "GET");
}
exports.findAllUserBuyerReceipts = findAllUserBuyerReceipts;
exports.Receipt = {
    getShop_Receipt2: getShop_Receipt2,
    updateReceipt: updateReceipt,
    findAllShopReceipts: findAllShopReceipts,
    submitTracking: submitTracking,
    findAllShopReceiptsByStatus: findAllShopReceiptsByStatus,
    findAllOpenLocalDeliveryReceipts: findAllOpenLocalDeliveryReceipts,
    searchAllShopReceipts: searchAllShopReceipts,
    findAllUserBuyerReceipts: findAllUserBuyerReceipts
};
