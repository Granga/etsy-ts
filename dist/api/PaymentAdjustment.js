"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustment = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a Payment Adjustments from a Payment Id
 */
function findPaymentAdjustments(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments", parameters, "GET", options);
}
/**
 * Get an Etsy Payments Transaction Adjustment
 */
function findPaymentAdjustment(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
}
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
}
/**
 * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForPaymentAccountLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
}
exports.PaymentAdjustment = {
    findPaymentAdjustments,
    findPaymentAdjustment,
    findPaymentAdjustmentForLedgerEntry,
    findPaymentAdjustmentForPaymentAccountLedgerEntry
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEFkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1BheW1lbnRBZGp1c3RtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTRFckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBVSxVQUE2QyxFQUFFLE9BQWtCO0lBQ3RHLE9BQU8sZ0JBQU8sQ0FBNkMsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoSSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFVLFVBQTRDLEVBQUUsT0FBa0I7SUFDcEcsT0FBTyxnQkFBTyxDQUE0QywwREFBMEQsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsbUNBQW1DLENBQVUsVUFBMEQsRUFBRSxPQUFrQjtJQUNoSSxPQUFPLGdCQUFPLENBQTBELDREQUE0RCxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEssQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxpREFBaUQsQ0FBVSxVQUF3RSxFQUFFLE9BQWtCO0lBQzVKLE9BQU8sZ0JBQU8sQ0FBd0UscUVBQXFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3TCxDQUFDO0FBRVksUUFBQSxpQkFBaUIsR0FBRztJQUM3QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxpREFBaUQ7Q0FDcEQsQ0FBQyJ9