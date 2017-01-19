"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Upload a new user avatar image
*/
function uploadAvatar(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/avatar', 'POST');
}
exports.uploadAvatar = uploadAvatar;
/**
* Get avatar image source
*/
function getAvatarImgSrc(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/avatar/src', 'GET');
}
exports.getAvatarImgSrc = getAvatarImgSrc;
