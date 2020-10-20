"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieve all suggested styles.
 */
function findSuggestedStyles(parameters, options) {
    return client_1.request("/taxonomy/styles", parameters, "GET", options);
}
exports.Style = { findSuggestedStyles };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQXFCckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RyxDQUFDO0FBRVksUUFBQSxLQUFLLEdBQUcsRUFBQyxtQkFBbUIsRUFBQyxDQUFDIn0=