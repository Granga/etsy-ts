import {
  ICreateDraftListingPayload,
  IErrorSchema,
  IFindAllActiveListingsByShopParams,
  IFindAllListingsActiveParams,
  IGetFeaturedListingsByShopParams,
  IGetListingParams,
  IGetListingsByListingIdsParams,
  IGetListingsByShopParams,
  IGetListingsByShopReceiptParams,
  IGetListingsByShopSectionIdParams,
  IListingPropertyValue,
  IListingPropertyValues,
  IShopListing,
  IShopListings,
  IShopListingsWithAssociations,
  IShopListingWithAssociations,
  IUpdateListingPayload,
  IUpdateListingPropertyPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListing<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a physical draft [listing](/documentation/reference#tag/ShopListing) product in a shop on the Etsy channel.
   *
   * @tags ShopListing
   * @name CreateDraftListing
   * @request POST:/v3/application/shops/{shop_id}/listings
   * @secure
   * @response `201` `IShopListing` A single ShopListing
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  createDraftListing = (shopId: number, data: ICreateDraftListingPayload, params: RequestParams = {}) =>
    this.http.request<IShopListing, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Endpoint to list Listings that belong to a Shop. Listings can be filtered using the 'state' param.
   *
   * @tags ShopListing
   * @name GetListingsByShop
   * @request GET:/v3/application/shops/{shop_id}/listings
   * @secure
   * @response `200` `IShopListings` A list of Listings
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingsByShop = ({ shopId, ...query }: IGetListingsByShopParams, params: RequestParams = {}) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to delete a ShopListing. A ShopListing can be deleted only if the state is one of the following:  SOLD_OUT, DRAFT, EXPIRED, INACTIVE, ACTIVE and is_available or ACTIVE and has seller flags:  SUPRESSED (frozen), VACATION, CUSTOM_SHOPS (pattern), SELL_ON_FACEBOOK
   *
   * @tags ShopListing
   * @name DeleteListing
   * @request DELETE:/v3/application/listings/{listing_id}
   * @secure
   * @response `204` `void` The Listing resource was correctly deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteListing = (listingId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/listings/${listingId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a listing record by listing ID.
   *
   * @tags ShopListing
   * @name GetListing
   * @request GET:/v3/application/listings/{listing_id}
   * @secure
   * @response `200` `IShopListingWithAssociations` A single Listing.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListing = ({ listingId, ...query }: IGetListingParams, params: RequestParams = {}) =>
    this.http.request<IShopListingWithAssociations, IErrorSchema>({
      path: `/v3/application/listings/${listingId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.
   *
   * @tags ShopListing
   * @name FindAllListingsActive
   * @request GET:/v3/application/listings/active
   * @secure
   * @response `200` `IShopListings` A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  findAllListingsActive = (query: IFindAllListingsActiveParams, params: RequestParams = {}) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/listings/active`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of all active listings on Etsy in a specific shop, paginated by listing creation date.
   *
   * @tags ShopListing
   * @name FindAllActiveListingsByShop
   * @request GET:/v3/application/shops/{shop_id}/listings/active
   * @secure
   * @response `200` `IShopListings` Retrieves a list of all active listings on Etsy in a specific shop, paginated by listing creation date.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  findAllActiveListingsByShop = (
    { shopId, ...query }: IFindAllActiveListingsByShopParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/active`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Allows to query multiple listing ids at once. Limit 100 ids maximum per query.
   *
   * @tags ShopListing
   * @name GetListingsByListingIds
   * @request GET:/v3/application/listings/batch
   * @secure
   * @response `200` `IShopListingsWithAssociations` A list of Listings
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingsByListingIds = (query: IGetListingsByListingIdsParams, params: RequestParams = {}) =>
    this.http.request<IShopListingsWithAssociations, IErrorSchema>({
      path: `/v3/application/listings/batch`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves Listings associated to a Shop that are featured.
   *
   * @tags ShopListing
   * @name GetFeaturedListingsByShop
   * @request GET:/v3/application/shops/{shop_id}/listings/featured
   * @secure
   * @response `200` `IShopListings` A list of Listings
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getFeaturedListingsByShop = ({ shopId, ...query }: IGetFeaturedListingsByShopParams, params: RequestParams = {}) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/featured`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a property for a Listing.
   *
   * @tags ShopListing
   * @name DeleteListingProperty
   * @request DELETE:/v3/application/shops/{shop_id}/listings/{listing_id}/properties/{property_id}
   * @secure
   * @response `204` `void` The ListingProperty resource was correctly deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteListingProperty = (shopId: number, listingId: number, propertyId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/properties/${propertyId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates or populates the properties list defining product offerings for a listing. Each offering requires both a `value` and a `value_id` that are valid for a `scale_id` assigned to the listing or that you assign to the listing with this request.
   *
   * @tags ShopListing
   * @name UpdateListingProperty
   * @request PUT:/v3/application/shops/{shop_id}/listings/{listing_id}/properties/{property_id}
   * @secure
   * @response `200` `IListingPropertyValue` A single listing property.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateListingProperty = (
    shopId: number,
    listingId: number,
    propertyId: number,
    data: IUpdateListingPropertyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IListingPropertyValue, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/properties/${propertyId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-01 wt-mr-xs-2"> Feedback only </span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">Development for this endpoint is in progress. It will only return a 501 response.</p></div> Retrieves a listing's property
   *
   * @tags ShopListing
   * @name GetListingProperty
   * @request GET:/v3/application/listings/{listing_id}/properties/{property_id}
   * @secure
   * @response `200` `IListingPropertyValue` A single ListingProperty.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   * @response `501` `IErrorSchema` This endpoint is not functional at this time.
   */
  getListingProperty = (listingId: number, propertyId: number, params: RequestParams = {}) =>
    this.http.request<IListingPropertyValue, IErrorSchema>({
      path: `/v3/application/listings/${listingId}/properties/${propertyId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a listing's properties
   *
   * @tags ShopListing
   * @name GetListingProperties
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/properties
   * @secure
   * @response `200` `IListingPropertyValues` A Listing's Properties
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingProperties = (shopId: number, listingId: number, params: RequestParams = {}) =>
    this.http.request<IListingPropertyValues, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/properties`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a listing, identified by a listing ID, for a specific shop identified by a shop ID.
   *
   * @tags ShopListing
   * @name UpdateListing
   * @request PUT:/v3/application/shops/{shop_id}/listings/{listing_id}
   * @secure
   * @response `200` `IShopListing` A single ShopListing
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateListing = (shopId: number, listingId: number, data: IUpdateListingPayload, params: RequestParams = {}) =>
    this.http.request<IShopListing, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Gets all listings associated with a receipt.
   *
   * @tags ShopListing
   * @name GetListingsByShopReceipt
   * @request GET:/v3/application/shops/{shop_id}/receipts/{receipt_id}/listings
   * @secure
   * @response `200` `IShopListings` A set of ShopListing resources.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingsByShopReceipt = (
    { receiptId, shopId, ...query }: IGetListingsByShopReceiptParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts/${receiptId}/listings`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves all the listings from the section of a specific shop.
   *
   * @tags ShopListing
   * @name GetListingsByShopSectionId
   * @request GET:/v3/application/shops/{shop_id}/shop-sections/listings
   * @secure
   * @response `200` `IShopListings` A list of listings from a shop section.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingsByShopSectionId = ({ shopId, ...query }: IGetListingsByShopSectionIdParams, params: RequestParams = {}) =>
    this.http.request<IShopListings, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/shop-sections/listings`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
