"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasury = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Search Treasuries or else List all Treasuries
 */
function findAllTreasuries(parameters, options) {
    return client_1.request("/treasuries", parameters, "GET", options);
}
/**
 * Get a Treasury
 */
function getTreasury(parameters, options) {
    return client_1.request("/treasuries/:treasury_key", parameters, "GET", options);
}
/**
 * Delete a Treasury
 */
function deleteTreasury(parameters, options) {
    return client_1.request("/treasuries/:treasury_key", parameters, "DELETE", options);
}
/**
 * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
 */
function findAllUserTreasuries(parameters, options) {
    return client_1.request("/users/:user_id/treasuries", parameters, "GET", options);
}
exports.Treasury = { findAllTreasuries, getTreasury, deleteTreasury, findAllUserTreasuries };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlYXN1cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1RyZWFzdXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQXlHckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBVSxVQUF3QyxFQUFFLE9BQWtCO0lBQzVGLE9BQU8sZ0JBQU8sQ0FBd0MsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckcsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxXQUFXLENBQVUsVUFBa0MsRUFBRSxPQUFrQjtJQUNoRixPQUFPLGdCQUFPLENBQWtDLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0csQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQVUsVUFBcUMsRUFBRSxPQUFrQjtJQUN0RixPQUFPLGdCQUFPLENBQXFDLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBVSxVQUE0QyxFQUFFLE9BQWtCO0lBQ3BHLE9BQU8sZ0JBQU8sQ0FBNEMsNEJBQTRCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SCxDQUFDO0FBRVksUUFBQSxRQUFRLEdBQUcsRUFBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFDLENBQUMifQ==