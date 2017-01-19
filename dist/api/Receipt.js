"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a Shop_Receipt2 by id.
 */
function getShop_Receipt2(parameters) {
    return HttpRequest_1.request(parameters, '/receipts/:receipt_id', 'GET');
}
exports.getShop_Receipt2 = getShop_Receipt2;
/**
 * Updates a Shop_Receipt2
 */
function updateReceipt(parameters) {
    return HttpRequest_1.request(parameters, '/receipts/:receipt_id', 'PUT');
}
exports.updateReceipt = updateReceipt;
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
function findAllShopReceipts(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts', 'GET');
}
exports.findAllShopReceipts = findAllShopReceipts;
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
function submitTracking(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts/:receipt_id/tracking', 'POST');
}
exports.submitTracking = submitTracking;
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
function findAllShopReceiptsByStatus(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts/:status', 'GET');
}
exports.findAllShopReceiptsByStatus = findAllShopReceiptsByStatus;
/**
 * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
 */
function findAllOpenLocalDeliveryReceipts(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts/local-delivery', 'GET');
}
exports.findAllOpenLocalDeliveryReceipts = findAllOpenLocalDeliveryReceipts;
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
function searchAllShopReceipts(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/receipts/search', 'GET');
}
exports.searchAllShopReceipts = searchAllShopReceipts;
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
function findAllUserBuyerReceipts(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/receipts', 'GET');
}
exports.findAllUserBuyerReceipts = findAllUserBuyerReceipts;
