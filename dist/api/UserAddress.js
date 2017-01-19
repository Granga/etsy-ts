"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a set of UserAddress objects associated to a User.
*/
function findAllUserAddresses(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/addresses', 'GET');
}
exports.findAllUserAddresses = findAllUserAddresses;
/**
* Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
*/
function createUserAddress(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/addresses/', 'POST');
}
exports.createUserAddress = createUserAddress;
/**
* Retrieves a UserAddress by id.
*/
function getUserAddress(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/addresses/:user_address_id', 'GET');
}
exports.getUserAddress = getUserAddress;
/**
* Deletes the UserAddress with the given id.
*/
function deleteUserAddress(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/addresses/:user_address_id', 'DELETE');
}
exports.deleteUserAddress = deleteUserAddress;
