"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a guest by ID.
 */
function getGuest(parameters, options) {
    return client_1.request("/guests/:guest_id", parameters, "GET", options);
}
/**
 * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
 */
function generateGuest(parameters, options) {
    return client_1.request("/guests/generator", parameters, "GET", options);
}
/**
 * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
 */
function claimGuest(parameters, options) {
    return client_1.request("/guests/:guest_id/claim", parameters, "POST", options);
}
/**
 * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
 */
function mergeGuest(parameters, options) {
    return client_1.request("/guests/:guest_id/merge", parameters, "POST", options);
}
exports.Guest = { getGuest, generateGuest, claimGuest, mergeGuest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3Vlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0d1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQStCckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQVUsVUFBK0IsRUFBRSxPQUFrQjtJQUMxRSxPQUFPLGdCQUFPLENBQStCLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEcsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxhQUFhLENBQVUsVUFBb0MsRUFBRSxPQUFrQjtJQUNwRixPQUFPLGdCQUFPLENBQW9DLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkcsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQVUsVUFBaUMsRUFBRSxPQUFrQjtJQUM5RSxPQUFPLGdCQUFPLENBQWlDLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0csQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQVUsVUFBaUMsRUFBRSxPQUFrQjtJQUM5RSxPQUFPLGdCQUFPLENBQWlDLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0csQ0FBQztBQUVZLFFBQUEsS0FBSyxHQUFHLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMifQ==