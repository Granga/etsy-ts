"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of ListingImage objects associated to a Listing.
 */
function findAllListingImages(parameters, options) {
    return client_1.request("/listings/:listing_id/images", parameters, "GET", options);
}
/**
 * Upload a new listing image, or re-associate a previously deleted one. You may associate an image
 to any listing within the same shop that the image's original listing belongs to.
 You MUST pass either a listing_image_id OR an image to this method.
 Passing a listing_image_id serves to re-associate an image that was previously deleted.
 If you wish to re-associate an image, we strongly recommend using the listing_image_id
 argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
 Pass overwrite=1 to replace the existing image at a given rank.
 When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
 will not be affected by this parameter.
 */
function uploadListingImage(parameters, options) {
    return client_1.request("/listings/:listing_id/images", parameters, "POST", options);
}
/**
 * Retrieves a Image_Listing by id.
 */
function getImage_Listing(parameters, options) {
    return client_1.request("/listings/:listing_id/images/:listing_image_id", parameters, "GET", options);
}
/**
 * Deletes a listing image. A copy of the file remains on our servers,
 and so a deleted image may be re-associated with the listing without
 re-uploading the original image; see uploadListingImage
 */
function deleteListingImage(parameters, options) {
    return client_1.request("/listings/:listing_id/images/:listing_image_id", parameters, "DELETE", options);
}
exports.ListingImage = { findAllListingImages: findAllListingImages, uploadListingImage: uploadListingImage, getImage_Listing: getImage_Listing, deleteListingImage: deleteListingImage };
