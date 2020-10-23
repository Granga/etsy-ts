"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var client_1 = require("../client/client");
//methods class
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    /**
     * Returns the UserProfile object associated with a User.
     */
    UserProfile.findUserProfile = function (parameters, options) {
        return client_1.request("/users/:user_id/profile", parameters, "GET", options);
    };
    /**
     * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
     */
    UserProfile.updateUserProfile = function (parameters, options) {
        return client_1.request("/users/:user_id/profile", parameters, "PUT", options);
    };
    return UserProfile;
}());
exports.UserProfile = UserProfile;
