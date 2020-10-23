import { request } from "../client/client";
//methods class
export class BillingOverview {
    /**
     * Retrieves the user's current balance.
     */
    static getUserBillingOverview(parameters, options) {
        return request("/users/:user_id/billing/overview", parameters, "GET", options);
    }
}
