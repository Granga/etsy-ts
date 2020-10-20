"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a Shop_Transaction by id.
 */
function getShop_Transaction(parameters, options) {
    return client_1.request("/transactions/:transaction_id", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
function findAllListingTransactions(parameters, options) {
    return client_1.request("/listings/:listing_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
function findAllShop_Receipt2Transactions(parameters, options) {
    return client_1.request("/receipts/:receipt_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
function findAllShopTransactions(parameters, options) {
    return client_1.request("/shops/:shop_id/transactions", parameters, "GET", options);
}
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
function findAllUserBuyerTransactions(parameters, options) {
    return client_1.request("/users/:user_id/transactions", parameters, "GET", options);
}
exports.Transaction = {
    getShop_Transaction,
    findAllListingTransactions,
    findAllShop_Receipt2Transactions,
    findAllShopTransactions,
    findAllUserBuyerTransactions
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTZJckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUF5QyxFQUFFLE9BQWtCO0lBQy9GLE9BQU8sZ0JBQU8sQ0FBeUMsK0JBQStCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFVLFVBQWlELEVBQUUsT0FBa0I7SUFDOUcsT0FBTyxnQkFBTyxDQUFpRCxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0NBQWdDLENBQVUsVUFBc0QsRUFBRSxPQUFrQjtJQUN6SCxPQUFPLGdCQUFPLENBQXNELG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBVSxVQUE4QyxFQUFFLE9BQWtCO0lBQ3hHLE9BQU8sZ0JBQU8sQ0FBOEMsOEJBQThCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDRCQUE0QixDQUFVLFVBQW1ELEVBQUUsT0FBa0I7SUFDbEgsT0FBTyxnQkFBTyxDQUFtRCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pJLENBQUM7QUFFWSxRQUFBLFdBQVcsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsNEJBQTRCO0NBQy9CLENBQUMifQ==