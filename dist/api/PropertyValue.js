"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValue = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get all of the attributes for a listing
 */
function getAttributes(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes", parameters, "GET", options);
}
/**
 * Get an attribute for a listing
 */
function getAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
}
/**
 * Update or populate an attribute for a listing
 */
function updateAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
}
/**
 * Delete an attribute for a listing
 */
function deleteAttribute(parameters, options) {
    return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
}
exports.PropertyValue = { getAttributes, getAttribute, updateAttribute, deleteAttribute };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvUHJvcGVydHlWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFvRHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsYUFBYSxDQUFVLFVBQW9DLEVBQUUsT0FBa0I7SUFDcEYsT0FBTyxnQkFBTyxDQUFvQyxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQywrQ0FBK0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFVLFVBQXNDLEVBQUUsT0FBa0I7SUFDeEYsT0FBTyxnQkFBTyxDQUFzQywrQ0FBK0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFVLFVBQXNDLEVBQUUsT0FBa0I7SUFDeEYsT0FBTyxnQkFBTyxDQUFzQywrQ0FBK0MsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hJLENBQUM7QUFFWSxRQUFBLGFBQWEsR0FBRyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBQyxDQUFDIn0=