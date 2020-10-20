"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustmentItem = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get Etsy Payments Transaction Adjustment Items
 */
function findPaymentAdjustmentItem(parameters, options) {
    return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
}
exports.PaymentAdjustmentItem = { findPaymentAdjustmentItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEFkanVzdG1lbnRJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9QYXltZW50QWRqdXN0bWVudEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBeUNyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLHlCQUF5QixDQUFVLFVBQWdELEVBQUUsT0FBa0I7SUFDNUcsT0FBTyxnQkFBTyxDQUFnRCxnRUFBZ0UsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hLLENBQUM7QUFFWSxRQUFBLHFCQUFxQixHQUFHLEVBQUMseUJBQXlCLEVBQUMsQ0FBQyJ9