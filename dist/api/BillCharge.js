import { request } from "../client/client";
//methods class
export class BillCharge {
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    static getUserChargesMetadata(parameters, options) {
        return request("/users/:user_id/charges/meta", parameters, "GET", options);
    }
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    static findAllUserCharges(parameters, options) {
        return request("/users/:user_id/charges", parameters, "GET", options);
    }
}
