"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all Users whose name or username match the keywords parameter.
 */
function findAllUsers(parameters) {
    return httpClient_1.request("/users", parameters, "GET");
}
exports.findAllUsers = findAllUsers;
/**
 * Retrieves a User by id.
 */
function getUser(parameters) {
    return httpClient_1.request("/users/:user_id", parameters, "GET");
}
exports.getUser = getUser;
/**
 * Returns a list of users for a specific team
 */
function findAllUsersForTeam(parameters) {
    return httpClient_1.request("/teams/:team_id/users/", parameters, "GET");
}
exports.findAllUsersForTeam = findAllUsersForTeam;
/**
 * Returns a list of users who have circled this user
 */
function getCirclesContainingUser(parameters) {
    return httpClient_1.request("/users/:user_id/circles", parameters, "GET");
}
exports.getCirclesContainingUser = getCirclesContainingUser;
/**
 * Returns details about a connection between users
 */
function getConnectedUser(parameters) {
    return httpClient_1.request("/users/:user_id/circles/:to_user_id", parameters, "GET");
}
exports.getConnectedUser = getConnectedUser;
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
function unconnectUsers(parameters) {
    return httpClient_1.request("/users/:user_id/circles/:to_user_id", parameters, "DELETE");
}
exports.unconnectUsers = unconnectUsers;
/**
 * Returns a list of users that are in this user's cricle
 */
function getConnectedUsers(parameters) {
    return httpClient_1.request("/users/:user_id/connected_users", parameters, "GET");
}
exports.getConnectedUsers = getConnectedUsers;
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
function connectUsers(parameters) {
    return httpClient_1.request("/users/:user_id/connected_users", parameters, "POST");
}
exports.connectUsers = connectUsers;
exports.User = {
    findAllUsers: findAllUsers,
    getUser: getUser,
    findAllUsersForTeam: findAllUsersForTeam,
    getCirclesContainingUser: getCirclesContainingUser,
    getConnectedUser: getConnectedUser,
    unconnectUsers: unconnectUsers,
    getConnectedUsers: getConnectedUsers,
    connectUsers: connectUsers
};
