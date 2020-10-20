"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Describes the legal values for Listing.occasion.
 */
function describeOccasionEnum(parameters, options) {
    return client_1.request("/types/enum/occasion", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.recipient.
 */
function describeRecipientEnum(parameters, options) {
    return client_1.request("/types/enum/recipient", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.when_made.
 */
function describeWhenMadeEnum(parameters, options) {
    return client_1.request("/types/enum/when_made", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.who_made.
 */
function describeWhoMadeEnum(parameters, options) {
    return client_1.request("/types/enum/who_made", parameters, "GET", options);
}
exports.DataType = { describeOccasionEnum, describeRecipientEnum, describeWhenMadeEnum, describeWhoMadeEnum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0RhdGFUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQThCckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBVSxVQUEyQyxFQUFFLE9BQWtCO0lBQ2xHLE9BQU8sZ0JBQU8sQ0FBMkMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFVLFVBQTRDLEVBQUUsT0FBa0I7SUFDcEcsT0FBTyxnQkFBTyxDQUE0Qyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsb0JBQW9CLENBQVUsVUFBMkMsRUFBRSxPQUFrQjtJQUNsRyxPQUFPLGdCQUFPLENBQTJDLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoSCxDQUFDO0FBRVksUUFBQSxRQUFRLEdBQUcsRUFBQyxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBQyxDQUFDIn0=