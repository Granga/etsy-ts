"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Finds all Users whose name or username match the keywords parameter.
*/
function findAllUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users', 'GET');
}
exports.findAllUsers = findAllUsers;
/**
* Retrieves a User by id.
*/
function getUser(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id', 'GET');
}
exports.getUser = getUser;
/**
* Returns a list of users for a specific team
*/
function findAllUsersForTeam(parameters) {
    return HttpRequest_1.request(parameters, '/teams/:team_id/users/', 'GET');
}
exports.findAllUsersForTeam = findAllUsersForTeam;
/**
* Returns a list of users who have circled this user
*/
function getCirclesContainingUser(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/circles', 'GET');
}
exports.getCirclesContainingUser = getCirclesContainingUser;
/**
* Returns details about a connection between users
*/
function getConnectedUser(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/circles/:to_user_id', 'GET');
}
exports.getConnectedUser = getConnectedUser;
/**
* Removes a user (to_user_id) from the logged in user's (user_id) circle
*/
function unconnectUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/circles/:to_user_id', 'DELETE');
}
exports.unconnectUsers = unconnectUsers;
/**
* Returns a list of users that are in this user's cricle
*/
function getConnectedUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/connected_users', 'GET');
}
exports.getConnectedUsers = getConnectedUsers;
/**
* Adds user (to_user_id) to the user's (user_id) circle
*/
function connectUsers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/connected_users', 'POST');
}
exports.connectUsers = connectUsers;
