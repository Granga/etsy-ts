"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger
 */
function findLedger(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/", parameters, "GET", options);
}
exports.Ledger = { findLedger };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVkZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9MZWRnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBaUNyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBVSxVQUFpQyxFQUFFLE9BQWtCO0lBQzlFLE9BQU8sZ0JBQU8sQ0FBaUMseUJBQXlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRyxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQUcsRUFBQyxVQUFVLEVBQUMsQ0FBQyJ9