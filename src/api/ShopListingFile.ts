import { IErrorSchema, IShopListingFile, IShopListingFiles, IUploadListingFilePayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListingFile {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a file from a specific listing. When you delete the final file for a digital listing, the listing converts into a physical listing. The response to a delete request returns a list of the remaining file records associated with the given listing.
   *
   * @tags ShopListing File
   * @name DeleteListingFile
   * @request DELETE:/v3/application/shops/{shop_id}/listings/{listing_id}/files/{listing_file_id}
   * @secure
   * @response `204` `void` The ShopListingFile resource was correctly deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteListingFile = (shopId: number, listingId: number, listingFileId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/files/${listingFileId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a single file associated with the given digital listing. Requesting a file from a physical listing returns an empty result.
   *
   * @tags ShopListing File
   * @name GetListingFile
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/files/{listing_file_id}
   * @secure
   * @response `200` `IShopListingFile` The metatdata for a file associated with a digital listing.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingFile = (shopId: number, listingId: number, listingFileId: number, params: RequestParams = {}) =>
    this.http.request<IShopListingFile, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/files/${listingFileId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves all the files associated with the given digital listing. Requesting files from a physical listing returns an empty result.
   *
   * @tags ShopListing File
   * @name GetAllListingFiles
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/files
   * @secure
   * @response `200` `IShopListingFiles` A list of metadata objects for the file resources associated with a listing.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getAllListingFiles = (listingId: number, shopId: number, params: RequestParams = {}) =>
    this.http.request<IShopListingFiles, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/files`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Uploads a new file for a digital listing, or associates an existing file with a specific listing. You must either provide the `listing_file_id` of an existing file, or the name and binary file data for a file to upload. Associating an existing file to a physical listing converts the physical listing into a digital listing, which removes all shipping costs and any product and inventory variations.
   *
   * @tags ShopListing File
   * @name UploadListingFile
   * @request POST:/v3/application/shops/{shop_id}/listings/{listing_id}/files
   * @secure
   * @response `201` `IShopListingFile` The metadata for a file associated with a digital listing.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  uploadListingFile = (
    shopId: number,
    listingId: number,
    data: IUploadListingFilePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopListingFile, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
