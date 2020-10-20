"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Returns the UserProfile object associated with a User.
 */
function findUserProfile(parameters, options) {
    return client_1.request("/users/:user_id/profile", parameters, "GET", options);
}
/**
 * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
 */
function updateUserProfile(parameters, options) {
    return client_1.request("/users/:user_id/profile", parameters, "PUT", options);
}
exports.UserProfile = { findUserProfile, updateUserProfile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1VzZXJQcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTJIckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQVUsVUFBc0MsRUFBRSxPQUFrQjtJQUN4RixPQUFPLGdCQUFPLENBQXNDLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0csQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBVSxVQUF3QyxFQUFFLE9BQWtCO0lBQzVGLE9BQU8sZ0JBQU8sQ0FBd0MseUJBQXlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqSCxDQUFDO0FBRVksUUFBQSxXQUFXLEdBQUcsRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyJ9