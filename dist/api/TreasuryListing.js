"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasuryListing = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Add listing to a Treasury
 */
function addTreasuryListing(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/listings", parameters, "POST", options);
}
/**
 * Remove listing from a Treasury
 */
function removeTreasuryListing(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
}
exports.TreasuryListing = { addTreasuryListing, removeTreasuryListing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlYXN1cnlMaXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9UcmVhc3VyeUxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBMEJyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFVLFVBQXlDLEVBQUUsT0FBa0I7SUFDOUYsT0FBTyxnQkFBTyxDQUF5QyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMscUJBQXFCLENBQVUsVUFBNEMsRUFBRSxPQUFrQjtJQUNwRyxPQUFPLGdCQUFPLENBQTRDLGdEQUFnRCxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0ksQ0FBQztBQUVZLFFBQUEsZUFBZSxHQUFHLEVBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyJ9