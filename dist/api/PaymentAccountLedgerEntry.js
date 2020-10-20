"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAccountLedgerEntry = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger's Entries
 */
function findPaymentAccountEntries(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
}
exports.PaymentAccountLedgerEntry = { findPaymentAccountEntries };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEFjY291bnRMZWRnZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvUGF5bWVudEFjY291bnRMZWRnZXJFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFrRHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELHlDQUF5QyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekksQ0FBQztBQUVZLFFBQUEseUJBQXlCLEdBQUcsRUFBQyx5QkFBeUIsRUFBQyxDQUFDIn0=