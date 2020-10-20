"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingOverview = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves the user's current balance.
 */
function getUserBillingOverview(parameters, options) {
    return client_1.request("/users/:user_id/billing/overview", parameters, "GET", options);
}
exports.BillingOverview = { getUserBillingOverview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlsbGluZ092ZXJ2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9CaWxsaW5nT3ZlcnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBNENyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLHNCQUFzQixDQUFVLFVBQTZDLEVBQUUsT0FBa0I7SUFDdEcsT0FBTyxnQkFBTyxDQUE2QyxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9ILENBQUM7QUFFWSxRQUFBLGVBQWUsR0FBRyxFQUFDLHNCQUFzQixFQUFDLENBQUMifQ==