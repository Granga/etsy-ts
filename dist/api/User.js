import { request } from "../client/client";
//methods class
export class User {
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    static findAllUsers(parameters, options) {
        return request("/users", parameters, "GET", options);
    }
    /**
     * Retrieves a User by id.
     */
    static getUser(parameters, options) {
        return request("/users/:user_id", parameters, "GET", options);
    }
    /**
     * Returns a list of users for a specific team
     */
    static findAllUsersForTeam(parameters, options) {
        return request("/teams/:team_id/users/", parameters, "GET", options);
    }
    /**
     * Returns a list of users who have circled this user
     */
    static getCirclesContainingUser(parameters, options) {
        return request("/users/:user_id/circles", parameters, "GET", options);
    }
    /**
     * Returns details about a connection between users
     */
    static getConnectedUser(parameters, options) {
        return request("/users/:user_id/circles/:to_user_id", parameters, "GET", options);
    }
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    static unconnectUsers(parameters, options) {
        return request("/users/:user_id/circles/:to_user_id", parameters, "DELETE", options);
    }
    /**
     * Returns a list of users that are in this user's cricle
     */
    static getConnectedUsers(parameters, options) {
        return request("/users/:user_id/connected_users", parameters, "GET", options);
    }
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    static connectUsers(parameters, options) {
        return request("/users/:user_id/connected_users", parameters, "POST", options);
    }
}
