"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Get a Shop Payment Account Ledger
 */
function findLedger(parameters, options) {
    return client_1.request("/shops/:shop_id/ledger/", parameters, "GET", options);
}
exports.Ledger = { findLedger: findLedger };
