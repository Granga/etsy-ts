"use strict";
class User {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    findAllUsers(parameters) {
        return this.client.http("/users", parameters, "GET");
    }
    /**
     * Retrieves a User by id.
     */
    getUser(parameters) {
        return this.client.http("/users/:user_id", parameters, "GET");
    }
    /**
     * Returns a list of users for a specific team
     */
    findAllUsersForTeam(parameters) {
        return this.client.http("/teams/:team_id/users/", parameters, "GET");
    }
    /**
     * Returns a list of users who have circled this user
     */
    getCirclesContainingUser(parameters) {
        return this.client.http("/users/:user_id/circles", parameters, "GET");
    }
    /**
     * Returns details about a connection between users
     */
    getConnectedUser(parameters) {
        return this.client.http("/users/:user_id/circles/:to_user_id", parameters, "GET");
    }
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    unconnectUsers(parameters) {
        return this.client.http("/users/:user_id/circles/:to_user_id", parameters, "DELETE");
    }
    /**
     * Returns a list of users that are in this user's cricle
     */
    getConnectedUsers(parameters) {
        return this.client.http("/users/:user_id/connected_users", parameters, "GET");
    }
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    connectUsers(parameters) {
        return this.client.http("/users/:user_id/connected_users", parameters, "POST");
    }
}
exports.User = User;
