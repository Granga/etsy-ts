import { request } from "../client/client";
//methods class
export class UserProfile {
    /**
     * Returns the UserProfile object associated with a User.
     */
    static findUserProfile(parameters, options) {
        return request("/users/:user_id/profile", parameters, "GET", options);
    }
    /**
     * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
     */
    static updateUserProfile(parameters, options) {
        return request("/users/:user_id/profile", parameters, "PUT", options);
    }
}
