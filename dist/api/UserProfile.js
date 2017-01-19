"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Returns the UserProfile object associated with a User.
*/
function findUserProfile(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/profile', 'GET');
}
exports.findUserProfile = findUserProfile;
/**
* Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
*/
function updateUserProfile(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/profile', 'PUT');
}
exports.updateUserProfile = updateUserProfile;
