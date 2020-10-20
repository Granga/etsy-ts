"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillPayment = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of BillPayment objects associated to a User.
 */
function findAllUserPayments(parameters, options) {
    return client_1.request("/users/:user_id/payments", parameters, "GET", options);
}
exports.BillPayment = { findAllUserPayments };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlsbFBheW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0JpbGxQYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQXVEckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwSCxDQUFDO0FBRVksUUFBQSxXQUFXLEdBQUcsRUFBQyxtQkFBbUIsRUFBQyxDQUFDIn0=