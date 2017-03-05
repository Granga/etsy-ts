"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteUser {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy(parameters) {
        return this.client.http("/users/:user_id/favored-by", parameters, "GET");
    }
    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers(parameters) {
        return this.client.http("/users/:user_id/favorites/users", parameters, "GET");
    }
    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers(parameters) {
        return this.client.http("/users/:user_id/favorites/users/:target_user_id", parameters, "GET");
    }
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers(parameters) {
        return this.client.http("/users/:user_id/favorites/users/:target_user_id", parameters, "POST");
    }
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers(parameters) {
        return this.client.http("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE");
    }
}
exports.FavoriteUser = FavoriteUser;
