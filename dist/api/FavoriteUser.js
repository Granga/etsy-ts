"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a set of FavoriteUser objects associated to a User.
*/
function findAllUserFavoredBy(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favored-by', 'GET');
}
exports.findAllUserFavoredBy = findAllUserFavoredBy;
/**
* Finds all favorite users for a user
*/
function findAllUserFavoriteUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/users', 'GET');
}
exports.findAllUserFavoriteUsers = findAllUserFavoriteUsers;
/**
* Finds a favorite user for a user
*/
function findUserFavoriteUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/users/:target_user_id', 'GET');
}
exports.findUserFavoriteUsers = findUserFavoriteUsers;
/**
* Creates a new favorite listing for a user
*/
function createUserFavoriteUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/users/:target_user_id', 'POST');
}
exports.createUserFavoriteUsers = createUserFavoriteUsers;
/**
* Delete a favorite listing for a user
*/
function deleteUserFavoriteUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/favorites/users/:target_user_id', 'DELETE');
}
exports.deleteUserFavoriteUsers = deleteUserFavoriteUsers;
