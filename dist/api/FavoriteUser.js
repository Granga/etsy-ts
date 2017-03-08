"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
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
exports.FavoriteUser = { findAllUserFavoredBy: findAllUserFavoredBy, findAllUserFavoriteUsers: findAllUserFavoriteUsers, findUserFavoriteUsers: findUserFavoriteUsers, createUserFavoriteUsers: createUserFavoriteUsers, deleteUserFavoriteUsers: deleteUserFavoriteUsers };
