"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
var client_1 = require("../client/client");
//methods class
var UserAddress = /** @class */ (function () {
    function UserAddress() {
    }
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    UserAddress.findAllUserAddresses = function (parameters, options) {
        return client_1.request("/users/:user_id/addresses", parameters, "GET", options);
    };
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    UserAddress.createUserAddress = function (parameters, options) {
        return client_1.request("/users/:user_id/addresses/", parameters, "POST", options);
    };
    /**
     * Retrieves a UserAddress by id.
     */
    UserAddress.getUserAddress = function (parameters, options) {
        return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "GET", options);
    };
    /**
     * Deletes the UserAddress with the given id.
     */
    UserAddress.deleteUserAddress = function (parameters, options) {
        return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "DELETE", options);
    };
    return UserAddress;
}());
exports.UserAddress = UserAddress;
