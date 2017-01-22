"use strict";
class Avatar {
    constructor(client) {
        this.client = client;
    }
    /**
     * Upload a new user avatar image
     */
    uploadAvatar(parameters) {
        return this.client.http("/users/:user_id/avatar", parameters, "POST");
    }
    /**
     * Get avatar image source
     */
    getAvatarImgSrc(parameters) {
        return this.client.http("/users/:user_id/avatar/src", parameters, "GET");
    }
}
exports.Avatar = Avatar;
