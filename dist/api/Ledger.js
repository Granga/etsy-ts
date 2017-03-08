"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a Shop Payment Account Ledger
 */
function findLedger(parameters) {
    return httpClient_1.request("/shops/:shop_id/ledger/", parameters, "GET");
}
exports.findLedger = findLedger;
exports.Ledger = {findLedger: findLedger};
