"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataType {
    constructor(client) {
        this.client = client;
    }
    /**
     * Describes the legal values for Listing.occasion.
     */
    describeOccasionEnum(parameters) {
        return this.client.http("/types/enum/occasion", parameters, "GET");
    }
    /**
     * Describes the legal values for Listing.recipient.
     */
    describeRecipientEnum(parameters) {
        return this.client.http("/types/enum/recipient", parameters, "GET");
    }
    /**
     * Describes the legal values for Listing.when_made.
     */
    describeWhenMadeEnum(parameters) {
        return this.client.http("/types/enum/when_made", parameters, "GET");
    }
    /**
     * Describes the legal values for Listing.who_made.
     */
    describeWhoMadeEnum(parameters) {
        return this.client.http("/types/enum/who_made", parameters, "GET");
    }
}
exports.DataType = DataType;
