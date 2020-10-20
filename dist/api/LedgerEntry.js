"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntry = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger's Entries
 */
function findLedgerEntries(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries", parameters, "GET", options);
}
/**
 * Get a Shop Payment Account Ledger Entry
 */
function findLedgerEntry(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET", options);
}
exports.LedgerEntry = { findLedgerEntries, findLedgerEntry };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVkZ2VyRW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0xlZGdlckVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTBEckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBVSxVQUF3QyxFQUFFLE9BQWtCO0lBQzVGLE9BQU8sZ0JBQU8sQ0FBd0MsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBVSxVQUFzQyxFQUFFLE9BQWtCO0lBQ3hGLE9BQU8sZ0JBQU8sQ0FBc0MsaURBQWlELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2SSxDQUFDO0FBRVksUUFBQSxXQUFXLEdBQUcsRUFBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUMsQ0FBQyJ9