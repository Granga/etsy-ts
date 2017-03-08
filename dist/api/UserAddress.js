"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of UserAddress objects associated to a User.
 */
function findAllUserAddresses(parameters) {
    return httpClient_1.request("/users/:user_id/addresses", parameters, "GET");
}
exports.findAllUserAddresses = findAllUserAddresses;
/**
 * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
 */
function createUserAddress(parameters) {
    return httpClient_1.request("/users/:user_id/addresses/", parameters, "POST");
}
exports.createUserAddress = createUserAddress;
/**
 * Retrieves a UserAddress by id.
 */
function getUserAddress(parameters) {
    return httpClient_1.request("/users/:user_id/addresses/:user_address_id", parameters, "GET");
}
exports.getUserAddress = getUserAddress;
/**
 * Deletes the UserAddress with the given id.
 */
function deleteUserAddress(parameters) {
    return httpClient_1.request("/users/:user_id/addresses/:user_address_id", parameters, "DELETE");
}
exports.deleteUserAddress = deleteUserAddress;
exports.UserAddress = {
    findAllUserAddresses: findAllUserAddresses,
    createUserAddress: createUserAddress,
    getUserAddress: getUserAddress,
    deleteUserAddress: deleteUserAddress
};
