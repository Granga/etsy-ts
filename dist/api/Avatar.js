"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var client_1 = require("../client/client");
//methods class
var Avatar = /** @class */ (function () {
    function Avatar() {
    }
    /**
     * Upload a new user avatar image
     */
    Avatar.uploadAvatar = function (parameters, options) {
        return client_1.request("/users/:user_id/avatar", parameters, "POST", options);
    };
    /**
     * Get avatar image source
     */
    Avatar.getAvatarImgSrc = function (parameters, options) {
        return client_1.request("/users/:user_id/avatar/src", parameters, "GET", options);
    };
    return Avatar;
}());
exports.Avatar = Avatar;
