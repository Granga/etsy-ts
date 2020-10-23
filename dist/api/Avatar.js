import { request } from "../client/client";
//methods class
export class Avatar {
    /**
     * Upload a new user avatar image
     */
    static uploadAvatar(parameters, options) {
        return request("/users/:user_id/avatar", parameters, "POST", options);
    }
    /**
     * Get avatar image source
     */
    static getAvatarImgSrc(parameters, options) {
        return request("/users/:user_id/avatar/src", parameters, "GET", options);
    }
}
