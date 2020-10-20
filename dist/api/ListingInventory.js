"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingInventory = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get the inventory for a listing
 */
function getInventory(parameters, options) {
    return client_1.request("/listings/:listing_id/inventory", parameters, "GET", options);
}
/**
 * Update the inventory for a listing
 */
function updateInventory(parameters, options) {
    return client_1.request("/listings/:listing_id/inventory", parameters, "PUT", options);
}
exports.ListingInventory = { getInventory, updateInventory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ0ludmVudG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvTGlzdGluZ0ludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFxQ3JELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxpQ0FBaUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFVLFVBQXNDLEVBQUUsT0FBa0I7SUFDeEYsT0FBTyxnQkFBTyxDQUFzQyxpQ0FBaUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZILENBQUM7QUFFWSxRQUFBLGdCQUFnQixHQUFHLEVBQUMsWUFBWSxFQUFFLGVBQWUsRUFBQyxDQUFDIn0=