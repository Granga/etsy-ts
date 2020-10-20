"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
const client_1 = require("../client/client");
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
    getShop_Receipt2,
    updateReceipt,
    findAllShopReceipts,
    submitTracking,
    findAllShopReceiptsByStatus,
    searchAllShopReceipts,
    findAllUserBuyerReceipts
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjZWlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvUmVjZWlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUF1TnJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCLENBQVUsVUFBc0MsRUFBRSxPQUFrQjtJQUN6RixPQUFPLGdCQUFPLENBQXNDLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0csQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxhQUFhLENBQVUsVUFBb0MsRUFBRSxPQUFrQjtJQUNwRixPQUFPLGdCQUFPLENBQW9DLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0csQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBVSxVQUFxQyxFQUFFLE9BQWtCO0lBQ3RGLE9BQU8sZ0JBQU8sQ0FBcUMsK0NBQStDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNySSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDJCQUEyQixDQUFVLFVBQWtELEVBQUUsT0FBa0I7SUFDaEgsT0FBTyxnQkFBTyxDQUFrRCxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMscUJBQXFCLENBQVUsVUFBNEMsRUFBRSxPQUFrQjtJQUNwRyxPQUFPLGdCQUFPLENBQTRDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBVSxVQUErQyxFQUFFLE9BQWtCO0lBQzFHLE9BQU8sZ0JBQU8sQ0FBK0MsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SCxDQUFDO0FBRVksUUFBQSxPQUFPLEdBQUc7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsd0JBQXdCO0NBQzNCLENBQUMifQ==