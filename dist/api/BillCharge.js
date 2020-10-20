"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCharge = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Metadata for the set of BillCharges objects associated to a User
 */
function getUserChargesMetadata(parameters, options) {
    return client_1.request("/users/:user_id/charges/meta", parameters, "GET", options);
}
/**
 * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
 */
function findAllUserCharges(parameters, options) {
    return client_1.request("/users/:user_id/charges", parameters, "GET", options);
}
exports.BillCharge = { getUserChargesMetadata, findAllUserCharges };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlsbENoYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvQmlsbENoYXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUE4RHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsc0JBQXNCLENBQVUsVUFBNkMsRUFBRSxPQUFrQjtJQUN0RyxPQUFPLGdCQUFPLENBQTZDLDhCQUE4QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBVSxVQUF5QyxFQUFFLE9BQWtCO0lBQzlGLE9BQU8sZ0JBQU8sQ0FBeUMseUJBQXlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsSCxDQUFDO0FBRVksUUFBQSxVQUFVLEdBQUcsRUFBQyxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBQyxDQUFDIn0=