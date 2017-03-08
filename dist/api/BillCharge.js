"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Metadata for the set of BillCharges objects associated to a User
 */
function getUserChargesMetadata(parameters) {
    return httpClient_1.request("/users/:user_id/charges/meta", parameters, "GET");
}
exports.getUserChargesMetadata = getUserChargesMetadata;
/**
 * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
 */
function findAllUserCharges(parameters) {
    return httpClient_1.request("/users/:user_id/charges", parameters, "GET");
}
exports.findAllUserCharges = findAllUserCharges;
exports.BillCharge = {getUserChargesMetadata: getUserChargesMetadata, findAllUserCharges: findAllUserCharges};
