"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Finds all Users whose name or username match the keywords parameter.
 */
function findAllUsers(parameters, options) {
    return client_1.request("/users", parameters, "GET", options);
}
/**
 * Retrieves a User by id.
 */
function getUser(parameters, options) {
    return client_1.request("/users/:user_id", parameters, "GET", options);
}
/**
 * Returns a list of users for a specific team
 */
function findAllUsersForTeam(parameters, options) {
    return client_1.request("/teams/:team_id/users/", parameters, "GET", options);
}
/**
 * Returns a list of users who have circled this user
 */
function getCirclesContainingUser(parameters, options) {
    return client_1.request("/users/:user_id/circles", parameters, "GET", options);
}
/**
 * Returns details about a connection between users
 */
function getConnectedUser(parameters, options) {
    return client_1.request("/users/:user_id/circles/:to_user_id", parameters, "GET", options);
}
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
function unconnectUsers(parameters, options) {
    return client_1.request("/users/:user_id/circles/:to_user_id", parameters, "DELETE", options);
}
/**
 * Returns a list of users that are in this user's cricle
 */
function getConnectedUsers(parameters, options) {
    return client_1.request("/users/:user_id/connected_users", parameters, "GET", options);
}
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
function connectUsers(parameters, options) {
    return client_1.request("/users/:user_id/connected_users", parameters, "POST", options);
}
exports.User = {
    findAllUsers,
    getUser,
    findAllUsersForTeam,
    getCirclesContainingUser,
    getConnectedUser,
    unconnectUsers,
    getConnectedUsers,
    connectUsers
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUF5RnJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLE9BQU8sQ0FBVSxVQUE4QixFQUFFLE9BQWtCO0lBQ3hFLE9BQU8sZ0JBQU8sQ0FBOEIsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFVLFVBQTBDLEVBQUUsT0FBa0I7SUFDaEcsT0FBTyxnQkFBTyxDQUEwQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQVUsVUFBK0MsRUFBRSxPQUFrQjtJQUMxRyxPQUFPLGdCQUFPLENBQStDLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBVSxVQUF1QyxFQUFFLE9BQWtCO0lBQzFGLE9BQU8sZ0JBQU8sQ0FBdUMscUNBQXFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBVSxVQUFxQyxFQUFFLE9BQWtCO0lBQ3RGLE9BQU8sZ0JBQU8sQ0FBcUMscUNBQXFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3QyxpQ0FBaUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxpQ0FBaUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JILENBQUM7QUFFWSxRQUFBLElBQUksR0FBRztJQUNoQixZQUFZO0lBQ1osT0FBTztJQUNQLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtDQUNmLENBQUMifQ==