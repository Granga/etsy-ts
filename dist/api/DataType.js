import { request } from "../client/client";
//methods class
export class DataType {
    /**
     * Describes the legal values for Listing.occasion.
     */
    static describeOccasionEnum(parameters, options) {
        return request("/types/enum/occasion", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.recipient.
     */
    static describeRecipientEnum(parameters, options) {
        return request("/types/enum/recipient", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.when_made.
     */
    static describeWhenMadeEnum(parameters, options) {
        return request("/types/enum/when_made", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.who_made.
     */
    static describeWhoMadeEnum(parameters, options) {
        return request("/types/enum/who_made", parameters, "GET", options);
    }
}
