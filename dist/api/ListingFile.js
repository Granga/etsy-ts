"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingFile = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Finds all ListingFiles on a Listing
 */
function findAllListingFiles(parameters, options) {
    return client_1.request("/listings/:listing_id/files", parameters, "GET", options);
}
/**
 * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
 of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
 a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
 cause the listing to have free shipping and will remove any variations.
 */
function uploadListingFile(parameters, options) {
    return client_1.request("/listings/:listing_id/files", parameters, "POST", options);
}
/**
 * Finds a ListingFile by ID
 */
function findListingFile(parameters, options) {
    return client_1.request("/listings/:listing_id/files/:listing_file_id", parameters, "GET", options);
}
/**
 * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
 be considered a digital listing.
 */
function deleteListingFile(parameters, options) {
    return client_1.request("/listings/:listing_id/files/:listing_file_id", parameters, "DELETE", options);
}
exports.ListingFile = { findAllListingFiles, uploadListingFile, findListingFile, deleteListingFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ0ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0xpc3RpbmdGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTREckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsNkJBQTZCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2SCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3Qyw2QkFBNkIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFVLFVBQXNDLEVBQUUsT0FBa0I7SUFDeEYsT0FBTyxnQkFBTyxDQUFzQyw4Q0FBOEMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BJLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3Qyw4Q0FBOEMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pJLENBQUM7QUFFWSxRQUFBLFdBQVcsR0FBRyxFQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBQyxDQUFDIn0=