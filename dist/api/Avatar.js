"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Upload a new user avatar image
 */
function uploadAvatar(parameters) {
    return httpClient_1.request("/users/:user_id/avatar", parameters, "POST");
}
exports.uploadAvatar = uploadAvatar;
/**
 * Get avatar image source
 */
function getAvatarImgSrc(parameters) {
    return httpClient_1.request("/users/:user_id/avatar/src", parameters, "GET");
}
exports.getAvatarImgSrc = getAvatarImgSrc;
exports.Avatar = {uploadAvatar: uploadAvatar, getAvatarImgSrc: getAvatarImgSrc};
