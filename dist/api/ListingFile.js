"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Finds all ListingFiles on a Listing
*/
function findAllListingFiles(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/files', 'GET');
}
exports.findAllListingFiles = findAllListingFiles;
/**
* Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
cause the listing to have free shipping and will remove any variations.
*/
function uploadListingFile(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/files', 'POST');
}
exports.uploadListingFile = uploadListingFile;
/**
* Finds a ListingFile by ID
*/
function findListingFile(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/files/:listing_file_id', 'GET');
}
exports.findListingFile = findListingFile;
/**
* Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
be considered a digital listing.
*/
function deleteListingFile(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/files/:listing_file_id', 'DELETE');
}
exports.deleteListingFile = deleteListingFile;
