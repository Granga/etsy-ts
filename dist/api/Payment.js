"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get an Etsy Payments Transaction
 */
function findPayment(parameters, options) {
    return client_1.request("/payments/:payment_id", parameters, "GET", options);
}
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
function findPaymentForLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET", options);
}
/**
 * Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
 */
function findPaymentForPaymentAccountLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment", parameters, "GET", options);
}
/**
 * Get a Payment by Shop Receipt ID
 */
function findShopPaymentByReceipt(parameters, options) {
    return client_1.request("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET", options);
}
exports.Payment = {
    findPayment,
    findPaymentForLedgerEntry,
    findPaymentForPaymentAccountLedgerEntry,
    findShopPaymentByReceipt
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvUGF5bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFxSHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsV0FBVyxDQUFVLFVBQWtDLEVBQUUsT0FBa0I7SUFDaEYsT0FBTyxnQkFBTyxDQUFrQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELHlEQUF5RCxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekosQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx1Q0FBdUMsQ0FBVSxVQUE4RCxFQUFFLE9BQWtCO0lBQ3hJLE9BQU8sZ0JBQU8sQ0FBOEQsa0VBQWtFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHdCQUF3QixDQUFVLFVBQStDLEVBQUUsT0FBa0I7SUFDMUcsT0FBTyxnQkFBTyxDQUErQywrQ0FBK0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlJLENBQUM7QUFFWSxRQUFBLE9BQU8sR0FBRztJQUNuQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2Qyx3QkFBd0I7Q0FDM0IsQ0FBQyJ9