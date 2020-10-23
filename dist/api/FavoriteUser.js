import { request } from "../client/client";
//methods class
export class FavoriteUser {
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    static findAllUserFavoredBy(parameters, options) {
        return request("/users/:user_id/favored-by", parameters, "GET", options);
    }
    /**
     * Finds all favorite users for a user
     */
    static findAllUserFavoriteUsers(parameters, options) {
        return request("/users/:user_id/favorites/users", parameters, "GET", options);
    }
    /**
     * Finds a favorite user for a user
     */
    static findUserFavoriteUsers(parameters, options) {
        return request("/users/:user_id/favorites/users/:target_user_id", parameters, "GET", options);
    }
    /**
     * Creates a new favorite listing for a user
     */
    static createUserFavoriteUsers(parameters, options) {
        return request("/users/:user_id/favorites/users/:target_user_id", parameters, "POST", options);
    }
    /**
     * Delete a favorite listing for a user
     */
    static deleteUserFavoriteUsers(parameters, options) {
        return request("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE", options);
    }
}
