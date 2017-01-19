"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Search Treasuries or else List all Treasuries
*/
function findAllTreasuries(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries', 'GET');
}
exports.findAllTreasuries = findAllTreasuries;
/**
* Get a Treasury
*/
function getTreasury(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key', 'GET');
}
exports.getTreasury = getTreasury;
/**
* Delete a Treasury
*/
function deleteTreasury(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key', 'DELETE');
}
exports.deleteTreasury = deleteTreasury;
/**
* Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
*/
function findAllUserTreasuries(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/treasuries', 'GET');
}
exports.findAllUserTreasuries = findAllUserTreasuries;
