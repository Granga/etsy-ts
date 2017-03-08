"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of FavoriteUser objects associated to a User.
 */
function findAllUserFavoredBy(parameters) {
    return httpClient_1.request("/users/:user_id/favored-by", parameters, "GET");
}
exports.findAllUserFavoredBy = findAllUserFavoredBy;
/**
 * Finds all favorite users for a user
 */
function findAllUserFavoriteUsers(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/users", parameters, "GET");
}
exports.findAllUserFavoriteUsers = findAllUserFavoriteUsers;
/**
 * Finds a favorite user for a user
 */
function findUserFavoriteUsers(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "GET");
}
exports.findUserFavoriteUsers = findUserFavoriteUsers;
/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteUsers(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "POST");
}
exports.createUserFavoriteUsers = createUserFavoriteUsers;
/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteUsers(parameters) {
    return httpClient_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE");
}
exports.deleteUserFavoriteUsers = deleteUserFavoriteUsers;
exports.FavoriteUser = {
    findAllUserFavoredBy: findAllUserFavoredBy,
    findAllUserFavoriteUsers: findAllUserFavoriteUsers,
    findUserFavoriteUsers: findUserFavoriteUsers,
    createUserFavoriteUsers: createUserFavoriteUsers,
    deleteUserFavoriteUsers: deleteUserFavoriteUsers
};
