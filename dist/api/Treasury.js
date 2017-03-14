"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Search Treasuries or else List all Treasuries
 */
function findAllTreasuries(parameters, options) {
    return client_1.request("/treasuries", parameters, "GET", options);
}
/**
 * Get a Treasury
 */
function getTreasury(parameters, options) {
    return client_1.request("/treasuries/:treasury_key", parameters, "GET", options);
}
/**
 * Delete a Treasury
 */
function deleteTreasury(parameters, options) {
    return client_1.request("/treasuries/:treasury_key", parameters, "DELETE", options);
}
/**
 * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
 */
function findAllUserTreasuries(parameters, options) {
    return client_1.request("/users/:user_id/treasuries", parameters, "GET", options);
}
exports.Treasury = { findAllTreasuries: findAllTreasuries, getTreasury: getTreasury, deleteTreasury: deleteTreasury, findAllUserTreasuries: findAllUserTreasuries };
