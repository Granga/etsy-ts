import { request } from "../client/client";
//methods class
export class BillPayment {
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    static findAllUserPayments(parameters, options) {
        return request("/users/:user_id/payments", parameters, "GET", options);
    }
}
