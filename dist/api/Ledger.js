import { request } from "../client/client";
//methods class
export class Ledger {
    /**
     * Get a Shop Payment Account Ledger
     */
    static findLedger(parameters, options) {
        return request("/shops/:shop_id/ledger/", parameters, "GET", options);
    }
}
