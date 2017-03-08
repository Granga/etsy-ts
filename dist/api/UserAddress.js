"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieves a set of UserAddress objects associated to a User.
*/
function findAllUserAddresses(parameters, options) {
    return client_1.request("/users/:user_id/addresses", parameters, "GET", options);
}
/**
* Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
*/
function createUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/", parameters, "POST", options);
}
/**
* Retrieves a UserAddress by id.
*/
function getUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "GET", options);
}
/**
* Deletes the UserAddress with the given id.
*/
function deleteUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "DELETE", options);
}
exports.UserAddress = { findAllUserAddresses: findAllUserAddresses, createUserAddress: createUserAddress, getUserAddress: getUserAddress, deleteUserAddress: deleteUserAddress };
