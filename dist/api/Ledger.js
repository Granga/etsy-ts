"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = void 0;
var client_1 = require("../client/client");
//methods class
var Ledger = /** @class */ (function () {
    function Ledger() {
    }
    /**
     * Get a Shop Payment Account Ledger
     */
    Ledger.findLedger = function (parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/", parameters, "GET", options);
    };
    return Ledger;
}());
exports.Ledger = Ledger;
