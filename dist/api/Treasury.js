"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Search Treasuries or else List all Treasuries
 */
function findAllTreasuries(parameters) {
    return httpClient_1.request("/treasuries", parameters, "GET");
}
exports.findAllTreasuries = findAllTreasuries;
/**
 * Get a Treasury
 */
function getTreasury(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key", parameters, "GET");
}
exports.getTreasury = getTreasury;
/**
 * Delete a Treasury
 */
function deleteTreasury(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key", parameters, "DELETE");
}
exports.deleteTreasury = deleteTreasury;
/**
 * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
 */
function findAllUserTreasuries(parameters) {
    return httpClient_1.request("/users/:user_id/treasuries", parameters, "GET");
}
exports.findAllUserTreasuries = findAllUserTreasuries;
exports.Treasury = {
    findAllTreasuries: findAllTreasuries,
    getTreasury: getTreasury,
    deleteTreasury: deleteTreasury,
    findAllUserTreasuries: findAllUserTreasuries
};
