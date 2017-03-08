"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Upload a new user avatar image
*/
function uploadAvatar(parameters, options) {
    return client_1.request("/users/:user_id/avatar", parameters, "POST", options);
}
/**
* Get avatar image source
*/
function getAvatarImgSrc(parameters, options) {
    return client_1.request("/users/:user_id/avatar/src", parameters, "GET", options);
}
exports.Avatar = { uploadAvatar: uploadAvatar, getAvatarImgSrc: getAvatarImgSrc };
