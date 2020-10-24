"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var client_1 = require("../client/client");
//methods class
var User = /** @class */ (function () {
    function User() {
    }
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    User.findAllUsers = function (parameters, options) {
        return client_1.request("/users", parameters, "GET", options);
    };
    /**
     * Retrieves a User by id.
     */
    User.getUser = function (parameters, options) {
        return client_1.request("/users/:user_id", parameters, "GET", options);
    };
    /**
     * Returns a list of users for a specific team
     */
    User.findAllUsersForTeam = function (parameters, options) {
        return client_1.request("/teams/:team_id/users/", parameters, "GET", options);
    };
    /**
     * Returns a list of users who have circled this user
     */
    User.getCirclesContainingUser = function (parameters, options) {
        return client_1.request("/users/:user_id/circles", parameters, "GET", options);
    };
    /**
     * Returns details about a connection between users
     */
    User.getConnectedUser = function (parameters, options) {
        return client_1.request("/users/:user_id/circles/:to_user_id", parameters, "GET", options);
    };
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    User.unconnectUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/circles/:to_user_id", parameters, "DELETE", options);
    };
    /**
     * Returns a list of users that are in this user's cricle
     */
    User.getConnectedUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/connected_users", parameters, "GET", options);
    };
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    User.connectUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/connected_users", parameters, "POST", options);
    };
    return User;
}());
exports.User = User;
