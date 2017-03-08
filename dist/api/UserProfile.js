"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Returns the UserProfile object associated with a User.
*/
function findUserProfile(parameters, options) {
    return client_1.request("/users/:user_id/profile", parameters, "GET", options);
}
/**
* Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
*/
function updateUserProfile(parameters, options) {
    return client_1.request("/users/:user_id/profile", parameters, "PUT", options);
}
exports.UserProfile = { findUserProfile: findUserProfile, updateUserProfile: updateUserProfile };
