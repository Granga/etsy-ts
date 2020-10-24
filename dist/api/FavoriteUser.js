"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUser = void 0;
var client_1 = require("../client/client");
//methods class
var FavoriteUser = /** @class */ (function () {
    function FavoriteUser() {
    }
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    FavoriteUser.findAllUserFavoredBy = function (parameters, options) {
        return client_1.request("/users/:user_id/favored-by", parameters, "GET", options);
    };
    /**
     * Finds all favorite users for a user
     */
    FavoriteUser.findAllUserFavoriteUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/users", parameters, "GET", options);
    };
    /**
     * Finds a favorite user for a user
     */
    FavoriteUser.findUserFavoriteUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "GET", options);
    };
    /**
     * Creates a new favorite listing for a user
     */
    FavoriteUser.createUserFavoriteUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "POST", options);
    };
    /**
     * Delete a favorite listing for a user
     */
    FavoriteUser.deleteUserFavoriteUsers = function (parameters, options) {
        return client_1.request("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE", options);
    };
    return FavoriteUser;
}());
exports.FavoriteUser = FavoriteUser;
