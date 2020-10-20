"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingInfo = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
function findAllListingShippingProfileEntries(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/info", parameters, "GET", options);
}
/**
 * Creates a new ShippingInfo.
 */
function createShippingInfo(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/info", parameters, "POST", options);
}
/**
 * Retrieves a ShippingInfo by id.
 */
function getShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "GET", options);
}
/**
 * Updates a ShippingInfo with the given id.
 */
function updateShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "PUT", options);
}
/**
 * Deletes the ShippingInfo with the given id.
 */
function deleteShippingInfo(parameters, options) {
    return client_1.request("/shipping/info/:shipping_info_id", parameters, "DELETE", options);
}
exports.ShippingInfo = {
    findAllListingShippingProfileEntries,
    createShippingInfo,
    getShippingInfo,
    updateShippingInfo,
    deleteShippingInfo
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpcHBpbmdJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9TaGlwcGluZ0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBMEVyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLG9DQUFvQyxDQUFVLFVBQTJELEVBQUUsT0FBa0I7SUFDbEksT0FBTyxnQkFBTyxDQUEyRCxxQ0FBcUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsa0JBQWtCLENBQVUsVUFBeUMsRUFBRSxPQUFrQjtJQUM5RixPQUFPLGdCQUFPLENBQXlDLHFDQUFxQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQVUsVUFBc0MsRUFBRSxPQUFrQjtJQUN4RixPQUFPLGdCQUFPLENBQXNDLGtDQUFrQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBVSxVQUF5QyxFQUFFLE9BQWtCO0lBQzlGLE9BQU8sZ0JBQU8sQ0FBeUMsa0NBQWtDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFVLFVBQXlDLEVBQUUsT0FBa0I7SUFDOUYsT0FBTyxnQkFBTyxDQUF5QyxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlILENBQUM7QUFFWSxRQUFBLFlBQVksR0FBRztJQUN4QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0NBQ3JCLENBQUMifQ==