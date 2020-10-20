"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUser = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of FavoriteUser objects associated to a User.
 */
function findAllUserFavoredBy(parameters, options) {
    return client_1.request("/users/:user_id/favored-by", parameters, "GET", options);
}
/**
 * Finds all favorite users for a user
 */
function findAllUserFavoriteUsers(parameters, options) {
    return client_1.request("/users/:user_id/favorites/users", parameters, "GET", options);
}
/**
 * Finds a favorite user for a user
 */
function findUserFavoriteUsers(parameters, options) {
    return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "GET", options);
}
/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteUsers(parameters, options) {
    return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "POST", options);
}
/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteUsers(parameters, options) {
    return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE", options);
}
exports.FavoriteUser = {
    findAllUserFavoredBy,
    findAllUserFavoriteUsers,
    findUserFavoriteUsers,
    createUserFavoriteUsers,
    deleteUserFavoriteUsers
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9GYXZvcml0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBcURyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFVLFVBQTJDLEVBQUUsT0FBa0I7SUFDbEcsT0FBTyxnQkFBTyxDQUEyQyw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQVUsVUFBK0MsRUFBRSxPQUFrQjtJQUMxRyxPQUFPLGdCQUFPLENBQStDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBVSxVQUE0QyxFQUFFLE9BQWtCO0lBQ3BHLE9BQU8sZ0JBQU8sQ0FBNEMsaURBQWlELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3SSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHVCQUF1QixDQUFVLFVBQThDLEVBQUUsT0FBa0I7SUFDeEcsT0FBTyxnQkFBTyxDQUE4QyxpREFBaUQsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsdUJBQXVCLENBQVUsVUFBOEMsRUFBRSxPQUFrQjtJQUN4RyxPQUFPLGdCQUFPLENBQThDLGlEQUFpRCxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEosQ0FBQztBQUVZLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDMUIsQ0FBQyJ9