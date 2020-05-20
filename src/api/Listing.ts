import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IListing {
    /**
     * The listing's numeric ID.
     */
    listing_id: number,
    /**
     * One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.
     */
    state: string,
    /**
     * The numeric ID of the user who posted the item.
     */
    user_id: number,
    /**
     @deprecated
     * Deprecated: The category parameter is no longer supported—you must pass a buyer taxonomy id instead.
     */
    category_id: number,
    /**
     * The listing's title. This string is valid if it does not match the following pattern: /[^\p{L}\p{Nd}\p{P}\p{Sm}\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each.
     */
    title: string,
    /**
     * A description of the item.
     */
    description: string,
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The listing's expiration date and time, in epoch seconds.
     */
    ending_tsz: number,
    /**
     * The date and time the listing was originally posted, in epoch seconds.
     */
    original_creation_tsz: number,
    /**
     * The date and time the listing was updated, in epoch seconds.
     */
    last_modified_tsz: number,
    /**
     * The item's price (will be treated as private for sold listings).Note: The price is the minimum possible price. The getInventory method will detail exact prices for available offerings.
     */
    price: string,
    /**
     * The ISO (alphabetic) code for the item's currency.
     */
    currency_code: string,
    /**
     * The quantity of this item available for sale.Note: The quantity is the total number of available offerings. The getInventory method will detail quantities for individual offerings.
     */
    quantity: number,
    /**
     * A list of distinct SKUs applied to a listing.
     */
    sku: string[],
    /**
     * A list of tags for the item. A tag is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}\-'™©®]/u
     */
    tags: string[],
    /**
     * The seller taxonomy id of the listing.
     */
    taxonomy_id: number,
    /**
     * Etsy's suggestion for the seller taxonomy_id for this listing. Etsy makes this suggestion if the listing does not have a taxonomy_id chosen by the seller.
     */
    suggested_taxonomy_id: number,
    /**
     * The name of the taxonomy node of the item and the names of that node's parents
     */
    taxonomy_path: string[],
    /**
     * A list of materials used in the item. A material is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}]/u
     */
    materials: string[],
    /**
     * The numeric ID of the shop section for this listing, can be null
     */
    shop_section_id: number,
    /**
     * Position in the Featured Listings portion of the shop
     */
    featured_rank: number,
    /**
     * The time at which the listing last changed state.
     */
    state_tsz: number,
    /**
     * The full URL to the listing's page on Etsy.
     */
    url: string,
    /**
     * The number of times the listing has been viewed on Etsy.com (does not include API views).
     */
    views: number,
    /**
     * The number of members who've marked this Listing as a favorite
     */
    num_favorers: number,
    /**
     * The numeric ID of the shipping template associated with the listing.
     */
    shipping_template_id: number,
    /**
     @deprecated
     * Deprecated: Do not use
     */
    shipping_profile_id: number,
    /**
     * The minimum number of days for processing for this listing.
     */
    processing_min: number,
    /**
     * The maximum number of days for processing for this listing.
     */
    processing_max: number,
    /**
     * Who made the item being listed.
     */
    who_made: "i_did" | "collective" | "someone_else",
    /**
     * True if the listing is a supply.
     */
    is_supply: boolean,
    /**
     * When was the item made.
     */
    when_made: "made_to_order" | "2020_2020" | "2010_2019" | "2001_2009" | "before_2001" | "2000_2000" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
    /**
     * How much the item weighs.
     */
    item_weight: number,
    /**
     * The units used to represent the weight of this item.
     */
    item_weight_unit: "oz" | "lb" | "g" | "kg",
    /**
     * How long the item is.
     */
    item_length: number,
    /**
     * How wide the item is.
     */
    item_width: number,
    /**
     * How tall the item is.
     */
    item_height: number,
    /**
     * The units used to represent the dimensions of this item.
     */
    item_dimensions_unit: "in" | "ft" | "mm" | "cm" | "m",
    /**
     * Is this listing a private listing that is intendend for a specific buyer and hidden from shop view.Note: This field is experimental and may change at any time.
     */
    is_private: boolean,
    /**
     * Who is this listing for.
     */
    recipient: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified",
    /**
     * What is the occasion for this listing.
     */
    occasion: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding",
    /**
     * Style of this listing. Each style is a free-form text string such as "Formal", or "Steampunk". A Listing may have up to two styles. A style is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}]/u
     */
    style: string[],
    /**
     * If this flag is true, any applicable shop tax rates will not be applied to this listing on checkout.
     */
    non_taxable: boolean,
    /**
     * If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case.
     */
    is_customizable: boolean,
    /**
     * True if this listing is for a digital download.
     */
    is_digital: boolean,
    /**
     * Written description of the files attached to this digital listing.
     */
    file_data: string,
    /**
     * True if this listing can be updated with the new inventory endpoints
     */
    can_write_inventory: boolean,
    /**
     * True if variations are available for this Listing.
     */
    has_variations: boolean,
    /**
     * True if this listing has been set to automatic renewals.
     */
    should_auto_renew: boolean,
    /**
     * The IETF language tag (e.g. 'fr') for the language in which the listing is returned.
     */
    language: string
}

//parameters types
export interface ICreateListingParameters extends IStandardParameters {
    quantity: number,
    title: string,
    description: string,
    price: number,
    materials?: string[],
    shipping_template_id?: number,
    taxonomy_id: number,
    shop_section_id?: number,
    image_ids?: number[],
    is_customizable?: boolean,
    non_taxable?: boolean,
    image?: string,
    state?: "active" | "draft",
    processing_min?: number,
    processing_max?: number,
    tags?: string[],
    who_made: "i_did" | "collective" | "someone_else",
    is_supply: boolean,
    when_made: "made_to_order" | "2020_2020" | "2010_2019" | "2001_2009" | "before_2001" | "2000_2000" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
    recipient?: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified",
    occasion?: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding",
    style?: string[]
}
export interface IFindAllFeaturedListingsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    region?: string
}
export interface IGetListingParameters extends IStandardParameters {
    listing_id: number[]
}
export interface IUpdateListingParameters extends IStandardParameters {
    listing_id: number,
    title?: string,
    description?: string,
    materials?: string[],
    renew?: boolean,
    shipping_template_id?: number,
    shop_section_id?: number,
    state?: "active" | "inactive" | "draft",
    image_ids?: number[],
    is_customizable?: boolean,
    item_weight?: number,
    item_length?: number,
    item_width?: number,
    item_height?: number,
    item_weight_unit?: string,
    item_dimensions_unit?: string,
    non_taxable?: boolean,
    taxonomy_id?: number,
    tags?: string[],
    who_made?: "i_did" | "collective" | "someone_else",
    is_supply?: boolean,
    when_made?: "made_to_order" | "2020_2020" | "2010_2019" | "2001_2009" | "before_2001" | "2000_2000" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
    recipient?: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified",
    occasion?: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding",
    style?: string[],
    processing_min?: number,
    processing_max?: number,
    featured_rank?: number
}
export interface IDeleteListingParameters extends IStandardParameters {
    listing_id: number
}
export interface IFindAllListingActiveParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    keywords?: string,
    sort_on?: "created" | "price" | "score",
    sort_order?: "up" | "down",
    min_price?: number,
    max_price?: number,
    color?: string,
    color_accuracy?: number,
    tags?: string[],
    taxonomy_id?: number,
    location?: string,
    lat?: number,
    lon?: number,
    region?: string,
    geo_level?: "city" | "state" | "country",
    accepts_gift_cards?: boolean,
    translate_keywords?: boolean
}
export interface IGetInterestingListingsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetTrendingListingsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllListingsForFeaturedTreasuryIdParameters extends IStandardParameters {
    featured_treasury_id: number
}
export interface IFindAllActiveListingsForFeaturedTreasuryIdParameters extends IStandardParameters {
    featured_treasury_id: number
}
export interface IFindAllCurrentFeaturedListingsParameters extends IStandardParameters {
    region?: string
}
export interface IFindAllReceiptListingsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    receipt_id: number
}
export interface IFindAllShopListingsActiveParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    shop_id: string | number,
    keywords?: string,
    sort_on?: "created" | "price" | "score",
    sort_order?: "up" | "down",
    min_price?: number,
    max_price?: number,
    color?: string,
    color_accuracy?: number,
    tags?: string[],
    taxonomy_id?: number,
    translate_keywords?: boolean,
    include_private?: boolean
}
export interface IFindAllShopListingsDraftParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopListingsExpiredParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetShopListingExpiredParameters extends IStandardParameters {
    shop_id: string | number,
    listing_id: number
}
export interface IFindAllShopListingsFeaturedParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopListingsInactiveParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetShopListingInactiveParameters extends IStandardParameters {
    shop_id: string | number,
    listing_id: number
}
export interface IFindAllShopSectionListingsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    shop_id: string | number,
    shop_section_id: number
}
export interface IFindAllShopSectionListingsActiveParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    shop_id: string | number,
    shop_section_id: number[],
    sort_on?: "created" | "price",
    sort_order?: "up" | "down"
}
export interface IFindAllCartListingsParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}

//methods
/**
 * Creates a new Listing.
 */
function createListing<TResult>(parameters: ICreateListingParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingParameters, TResult>> {
    return request<ICreateListingParameters, TResult>("/listings", parameters, "POST", options);
}

/**
 * Finds all FeaturedTreasury listings.
 */
function findAllFeaturedListings<TResult>(parameters: IFindAllFeaturedListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedListingsParameters, TResult>> {
    return request<IFindAllFeaturedListingsParameters, TResult>("/featured_treasuries/listings", parameters, "GET", options);
}

/**
 * Retrieves a Listing by id.
 */
function getListing<TResult>(parameters: IGetListingParameters, options?: IOptions): Promise<IStandardResponse<IGetListingParameters, TResult>> {
    return request<IGetListingParameters, TResult>("/listings/:listing_id", parameters, "GET", options);
}

/**
 * Updates a Listing
 */
function updateListing<TResult>(parameters: IUpdateListingParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingParameters, TResult>> {
    return request<IUpdateListingParameters, TResult>("/listings/:listing_id", parameters, "PUT", options);
}

/**
 * Deletes a Listing
 */
function deleteListing<TResult>(parameters: IDeleteListingParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingParameters, TResult>> {
    return request<IDeleteListingParameters, TResult>("/listings/:listing_id", parameters, "DELETE", options);
}

/**
 * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
 */
function findAllListingActive<TResult>(parameters: IFindAllListingActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingActiveParameters, TResult>> {
    return request<IFindAllListingActiveParameters, TResult>("/listings/active", parameters, "GET", options);
}

/**
 * Collects the list of interesting listings
 */
function getInterestingListings<TResult>(parameters: IGetInterestingListingsParameters, options?: IOptions): Promise<IStandardResponse<IGetInterestingListingsParameters, TResult>> {
    return request<IGetInterestingListingsParameters, TResult>("/listings/interesting", parameters, "GET", options);
}

/**
 * Collects the list of listings used to generate the trending listing page
 */
function getTrendingListings<TResult>(parameters: IGetTrendingListingsParameters, options?: IOptions): Promise<IStandardResponse<IGetTrendingListingsParameters, TResult>> {
    return request<IGetTrendingListingsParameters, TResult>("/listings/trending", parameters, "GET", options);
}

/**
 * Finds all listings for a certain FeaturedTreasury.
 */
function findAllListingsForFeaturedTreasuryId<TResult>(parameters: IFindAllListingsForFeaturedTreasuryIdParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>> {
    return request<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET", options);
}

/**
 * Finds all active listings for a certain FeaturedTreasury.
 */
function findAllActiveListingsForFeaturedTreasuryId<TResult>(parameters: IFindAllActiveListingsForFeaturedTreasuryIdParameters, options?: IOptions): Promise<IStandardResponse<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>> {
    return request<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET", options);
}

/**
 * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
 */
function findAllCurrentFeaturedListings<TResult>(parameters: IFindAllCurrentFeaturedListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCurrentFeaturedListingsParameters, TResult>> {
    return request<IFindAllCurrentFeaturedListingsParameters, TResult>("/featured_treasuries/listings/homepage_current", parameters, "GET", options);
}

/**
 * Finds all listings in a receipt
 */
function findAllReceiptListings<TResult>(parameters: IFindAllReceiptListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllReceiptListingsParameters, TResult>> {
    return request<IFindAllReceiptListingsParameters, TResult>("/receipts/:receipt_id/listings", parameters, "GET", options);
}

/**
 * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
 */
function findAllShopListingsActive<TResult>(parameters: IFindAllShopListingsActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsActiveParameters, TResult>> {
    return request<IFindAllShopListingsActiveParameters, TResult>("/shops/:shop_id/listings/active", parameters, "GET", options);
}

/**
 * Finds all of a Shop's draft listings
 */
function findAllShopListingsDraft<TResult>(parameters: IFindAllShopListingsDraftParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsDraftParameters, TResult>> {
    return request<IFindAllShopListingsDraftParameters, TResult>("/shops/:shop_id/listings/draft", parameters, "GET", options);
}

/**
 * Retrieves Listings associated to a Shop that are expired
 */
function findAllShopListingsExpired<TResult>(parameters: IFindAllShopListingsExpiredParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsExpiredParameters, TResult>> {
    return request<IFindAllShopListingsExpiredParameters, TResult>("/shops/:shop_id/listings/expired", parameters, "GET", options);
}

/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingExpired<TResult>(parameters: IGetShopListingExpiredParameters, options?: IOptions): Promise<IStandardResponse<IGetShopListingExpiredParameters, TResult>> {
    return request<IGetShopListingExpiredParameters, TResult>("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET", options);
}

/**
 * Retrieves Listings associated to a Shop that are featured
 */
function findAllShopListingsFeatured<TResult>(parameters: IFindAllShopListingsFeaturedParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsFeaturedParameters, TResult>> {
    return request<IFindAllShopListingsFeaturedParameters, TResult>("/shops/:shop_id/listings/featured", parameters, "GET", options);
}

/**
 * Retrieves Listings associated to a Shop that are inactive
 */
function findAllShopListingsInactive<TResult>(parameters: IFindAllShopListingsInactiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsInactiveParameters, TResult>> {
    return request<IFindAllShopListingsInactiveParameters, TResult>("/shops/:shop_id/listings/inactive", parameters, "GET", options);
}

/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
function getShopListingInactive<TResult>(parameters: IGetShopListingInactiveParameters, options?: IOptions): Promise<IStandardResponse<IGetShopListingInactiveParameters, TResult>> {
    return request<IGetShopListingInactiveParameters, TResult>("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET", options);
}

/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListings<TResult>(parameters: IFindAllShopSectionListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionListingsParameters, TResult>> {
    return request<IFindAllShopSectionListingsParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET", options);
}

/**
 * Finds all listings within a shop section
 */
function findAllShopSectionListingsActive<TResult>(parameters: IFindAllShopSectionListingsActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionListingsActiveParameters, TResult>> {
    return request<IFindAllShopSectionListingsActiveParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET", options);
}

/**
 * Finds all listings in a given Cart
 */
function findAllCartListings<TResult>(parameters: IFindAllCartListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCartListingsParameters, TResult>> {
    return request<IFindAllCartListingsParameters, TResult>("/users/:user_id/carts/:cart_id/listings", parameters, "GET", options);
}

export const Listing = {
    createListing,
    findAllFeaturedListings,
    getListing,
    updateListing,
    deleteListing,
    findAllListingActive,
    getInterestingListings,
    getTrendingListings,
    findAllListingsForFeaturedTreasuryId,
    findAllActiveListingsForFeaturedTreasuryId,
    findAllCurrentFeaturedListings,
    findAllReceiptListings,
    findAllShopListingsActive,
    findAllShopListingsDraft,
    findAllShopListingsExpired,
    getShopListingExpired,
    findAllShopListingsFeatured,
    findAllShopListingsInactive,
    getShopListingInactive,
    findAllShopSectionListings,
    findAllShopSectionListingsActive,
    findAllCartListings
};
