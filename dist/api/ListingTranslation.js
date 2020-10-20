"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingTranslation = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
function getListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ListingTranslation by listing_id and language
 */
function createListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ListingTranslation by listing_id and language
 */
function updateListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ListingTranslation by listing_id and language
 */
function deleteListingTranslation(parameters, options) {
    return client_1.request("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
}
exports.ListingTranslation = {
    getListingTranslation,
    createListingTranslation,
    updateListingTranslation,
    deleteListingTranslation
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ1RyYW5zbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9MaXN0aW5nVHJhbnNsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBb0RyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFVLFVBQTRDLEVBQUUsT0FBa0I7SUFDcEcsT0FBTyxnQkFBTyxDQUE0Qyw4Q0FBOEMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQVUsVUFBK0MsRUFBRSxPQUFrQjtJQUMxRyxPQUFPLGdCQUFPLENBQStDLDhDQUE4QyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBVSxVQUErQyxFQUFFLE9BQWtCO0lBQzFHLE9BQU8sZ0JBQU8sQ0FBK0MsOENBQThDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3SSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHdCQUF3QixDQUFVLFVBQStDLEVBQUUsT0FBa0I7SUFDMUcsT0FBTyxnQkFBTyxDQUErQyw4Q0FBOEMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hKLENBQUM7QUFFWSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtDQUMzQixDQUFDIn0=