"use strict";
class UserProfile {
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns the UserProfile object associated with a User.
     */
    findUserProfile(parameters) {
        return this.client.http("/users/:user_id/profile", parameters, "GET");
    }
    /**
     * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
     */
    updateUserProfile(parameters) {
        return this.client.http("/users/:user_id/profile", parameters, "PUT");
    }
}
exports.UserProfile = UserProfile;
