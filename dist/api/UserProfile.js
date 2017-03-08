"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Returns the UserProfile object associated with a User.
 */
function findUserProfile(parameters) {
    return httpClient_1.request("/users/:user_id/profile", parameters, "GET");
}
exports.findUserProfile = findUserProfile;
/**
 * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
 */
function updateUserProfile(parameters) {
    return httpClient_1.request("/users/:user_id/profile", parameters, "PUT");
}
exports.updateUserProfile = updateUserProfile;
exports.UserProfile = {findUserProfile: findUserProfile, updateUserProfile: updateUserProfile};
