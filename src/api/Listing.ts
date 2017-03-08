import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IListing {
    listing_id: number,
    state: string,
    user_id: number,
    category_id: number,
    title: string,
    description: string,
    creation_tsz: number,
    ending_tsz: number,
    original_creation_tsz: number,
    last_modified_tsz: number,
    price: string,
    currency_code: string,
    quantity: number,
    tags: string[],
    category_path: string[],
    category_path_ids: number[],
    taxonomy_id: number,
    suggested_taxonomy_id: number,
    taxonomy_path: string[],
    materials: string[],
    shop_section_id: number,
    featured_rank: number,
    state_tsz: number,
    url: string,
    views: number,
    num_favorers: number,
    shipping_template_id: number,
    shipping_profile_id: number,
    processing_min: number,
    processing_max: number,
    who_made: "i_did"|"collective"|"someone_else",
    is_supply: boolean,
    when_made: "made_to_order"|"2010_2017"|"2000_2009"|"1998_1999"|"before_1998"|"1990_1997"|"1980s"|"1970s"|"1960s"|"1950s"|"1940s"|"1930s"|"1920s"|"1910s"|"1900s"|"1800s"|"1700s"|"before_1700",
    item_weight: number,
    item_weight_units: "oz"|"lb"|"g"|"kg",
    item_length: number,
    item_width: number,
    item_height: number,
    item_dimensions_unit: "in"|"ft"|"mm"|"cm"|"m",
    is_private: boolean,
    recipient: "men"|"women"|"unisex_adults"|"teen_boys"|"teen_girls"|"teens"|"boys"|"girls"|"children"|"baby_boys"|"baby_girls"|"babies"|"birds"|"cats"|"dogs"|"pets"|"not_specified",
    occasion: "anniversary"|"baptism"|"bar_or_bat_mitzvah"|"birthday"|"canada_day"|"chinese_new_year"|"cinco_de_mayo"|"confirmation"|"christmas"|"day_of_the_dead"|"easter"|"eid"|"engagement"|"fathers_day"|"get_well"|"graduation"|"halloween"|"hanukkah"|"housewarming"|"kwanzaa"|"prom"|"july_4th"|"mothers_day"|"new_baby"|"new_years"|"quinceanera"|"retirement"|"st_patricks_day"|"sweet_16"|"sympathy"|"thanksgiving"|"valentines"|"wedding",
    style: string[],
    non_taxable: boolean,
    is_customizable: boolean,
    is_digital: boolean,
    file_data: string,
    has_variations: boolean,
    should_auto_renew: boolean,
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
    shop_section_id?: number,
    image_ids?: number[],
    is_customizable?: boolean,
    non_taxable?: boolean,
    image?: string,
    state?: "active"|"draft",
    processing_min?: number,
    processing_max?: number,
    category_id?: number,
    taxonomy_id?: number,
    tags?: string[],
    who_made: "i_did"|"collective"|"someone_else",
    is_supply: boolean,
    when_made: "made_to_order"|"2010_2017"|"2000_2009"|"1998_1999"|"before_1998"|"1990_1997"|"1980s"|"1970s"|"1960s"|"1950s"|"1940s"|"1930s"|"1920s"|"1910s"|"1900s"|"1800s"|"1700s"|"before_1700",
    recipient?: "men"|"women"|"unisex_adults"|"teen_boys"|"teen_girls"|"teens"|"boys"|"girls"|"children"|"baby_boys"|"baby_girls"|"babies"|"birds"|"cats"|"dogs"|"pets"|"not_specified",
    occasion?: "anniversary"|"baptism"|"bar_or_bat_mitzvah"|"birthday"|"canada_day"|"chinese_new_year"|"cinco_de_mayo"|"confirmation"|"christmas"|"day_of_the_dead"|"easter"|"eid"|"engagement"|"fathers_day"|"get_well"|"graduation"|"halloween"|"hanukkah"|"housewarming"|"kwanzaa"|"prom"|"july_4th"|"mothers_day"|"new_baby"|"new_years"|"quinceanera"|"retirement"|"st_patricks_day"|"sweet_16"|"sympathy"|"thanksgiving"|"valentines"|"wedding",
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
    quantity?: number,
    title?: string,
    description?: string,
    price?: number,
    wholesale_price?: number,
    materials?: string[],
    renew?: boolean,
    shipping_template_id?: number,
    shop_section_id?: number,
    state?: "active"|"inactive"|"draft",
    image_ids?: number[],
    is_customizable?: boolean,
    item_weight?: number,
    item_length?: number,
    item_width?: number,
    item_height?: number,
    item_weight_unit?: string,
    item_dimensions_unit?: string,
    non_taxable?: boolean,
    category_id?: number,
    taxonomy_id?: number,
    tags?: string[],
    who_made?: "i_did"|"collective"|"someone_else",
    is_supply?: boolean,
    when_made?: "made_to_order"|"2010_2017"|"2000_2009"|"1998_1999"|"before_1998"|"1990_1997"|"1980s"|"1970s"|"1960s"|"1950s"|"1940s"|"1930s"|"1920s"|"1910s"|"1900s"|"1800s"|"1700s"|"before_1700",
    recipient?: "men"|"women"|"unisex_adults"|"teen_boys"|"teen_girls"|"teens"|"boys"|"girls"|"children"|"baby_boys"|"baby_girls"|"babies"|"birds"|"cats"|"dogs"|"pets"|"not_specified",
    occasion?: "anniversary"|"baptism"|"bar_or_bat_mitzvah"|"birthday"|"canada_day"|"chinese_new_year"|"cinco_de_mayo"|"confirmation"|"christmas"|"day_of_the_dead"|"easter"|"eid"|"engagement"|"fathers_day"|"get_well"|"graduation"|"halloween"|"hanukkah"|"housewarming"|"kwanzaa"|"prom"|"july_4th"|"mothers_day"|"new_baby"|"new_years"|"quinceanera"|"retirement"|"st_patricks_day"|"sweet_16"|"sympathy"|"thanksgiving"|"valentines"|"wedding",
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
    sort_on?: "created"|"price"|"score",
    sort_order?: "up"|"down",
    min_price?: number,
    max_price?: number,
    color?: string,
    color_accuracy?: number,
    tags?: string[],
    category?: string,
    location?: string,
    lat?: number,
    lon?: number,
    region?: string,
    geo_level?: "city"|"state"|"country",
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
export interface IFindBrowseSegmentListingsParameters extends IStandardParameters {
    path: string,
    limit?: number,
    offset?: number,
    page?: number,
    keywords?: string,
    sort_on?: "created"|"price"|"score",
    sort_order?: "up"|"down",
    min_price?: number,
    max_price?: number,
    ship_to?: string,
    location?: string,
    lat?: number,
    lon?: number,
    geo_level?: "city"|"state"|"country",
    accepts_gift_cards?: boolean
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
    sort_on?: "created"|"price"|"score",
    sort_order?: "up"|"down",
    min_price?: number,
    max_price?: number,
    color?: string,
    color_accuracy?: number,
    tags?: string[],
    category?: string,
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
    sort_on?: "created"|"price",
    sort_order?: "up"|"down"
}
export interface IFindAllCartListingsParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}

//methods

/**
 * Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
 */
export function createListing <TResult>(parameters: ICreateListingParameters): Promise<IStandardResponse<ICreateListingParameters, TResult>> {
    return request<ICreateListingParameters, TResult>("/listings", parameters, "POST");
}
/**
 * Finds all FeaturedTreasury listings.
 */
export function findAllFeaturedListings <TResult>(parameters: IFindAllFeaturedListingsParameters): Promise<IStandardResponse<IFindAllFeaturedListingsParameters, TResult>> {
    return request<IFindAllFeaturedListingsParameters, TResult>("/featured_treasuries/listings", parameters, "GET");
}
/**
 * Retrieves a Listing by id.
 */
export function getListing <TResult>(parameters: IGetListingParameters): Promise<IStandardResponse<IGetListingParameters, TResult>> {
    return request<IGetListingParameters, TResult>("/listings/:listing_id", parameters, "GET");
}
/**
 * Updates a Listing
 */
export function updateListing <TResult>(parameters: IUpdateListingParameters): Promise<IStandardResponse<IUpdateListingParameters, TResult>> {
    return request<IUpdateListingParameters, TResult>("/listings/:listing_id", parameters, "PUT");
}
/**
 * Deletes a Listing
 */
export function deleteListing <TResult>(parameters: IDeleteListingParameters): Promise<IStandardResponse<IDeleteListingParameters, TResult>> {
    return request<IDeleteListingParameters, TResult>("/listings/:listing_id", parameters, "DELETE");
}
/**
 * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
 */
export function findAllListingActive <TResult>(parameters: IFindAllListingActiveParameters): Promise<IStandardResponse<IFindAllListingActiveParameters, TResult>> {
    return request<IFindAllListingActiveParameters, TResult>("/listings/active", parameters, "GET");
}
/**
 * Collects the list of interesting listings
 */
export function getInterestingListings <TResult>(parameters: IGetInterestingListingsParameters): Promise<IStandardResponse<IGetInterestingListingsParameters, TResult>> {
    return request<IGetInterestingListingsParameters, TResult>("/listings/interesting", parameters, "GET");
}
/**
 * Collects the list of listings used to generate the trending listing page
 */
export function getTrendingListings <TResult>(parameters: IGetTrendingListingsParameters): Promise<IStandardResponse<IGetTrendingListingsParameters, TResult>> {
    return request<IGetTrendingListingsParameters, TResult>("/listings/trending", parameters, "GET");
}
/**
 * Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
 */
export function findBrowseSegmentListings <TResult>(parameters: IFindBrowseSegmentListingsParameters): Promise<IStandardResponse<IFindBrowseSegmentListingsParameters, TResult>> {
    return request<IFindBrowseSegmentListingsParameters, TResult>("/segments/listings", parameters, "GET");
}
/**
 * Finds all listings for a certain FeaturedTreasury.
 */
export function findAllListingsForFeaturedTreasuryId <TResult>(parameters: IFindAllListingsForFeaturedTreasuryIdParameters): Promise<IStandardResponse<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>> {
    return request<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>("/featured_treasuries/:featured_treasury_id/listings", parameters, "GET");
}
/**
 * Finds all active listings for a certain FeaturedTreasury.
 */
export function findAllActiveListingsForFeaturedTreasuryId <TResult>(parameters: IFindAllActiveListingsForFeaturedTreasuryIdParameters): Promise<IStandardResponse<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>> {
    return request<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>("/featured_treasuries/:featured_treasury_id/listings/active", parameters, "GET");
}
/**
 * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
 */
export function findAllCurrentFeaturedListings <TResult>(parameters: IFindAllCurrentFeaturedListingsParameters): Promise<IStandardResponse<IFindAllCurrentFeaturedListingsParameters, TResult>> {
    return request<IFindAllCurrentFeaturedListingsParameters, TResult>("/featured_treasuries/listings/homepage_current", parameters, "GET");
}
/**
 * Finds all listings in a receipt
 */
export function findAllReceiptListings <TResult>(parameters: IFindAllReceiptListingsParameters): Promise<IStandardResponse<IFindAllReceiptListingsParameters, TResult>> {
    return request<IFindAllReceiptListingsParameters, TResult>("/receipts/:receipt_id/listings", parameters, "GET");
}
/**
 * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
 */
export function findAllShopListingsActive <TResult>(parameters: IFindAllShopListingsActiveParameters): Promise<IStandardResponse<IFindAllShopListingsActiveParameters, TResult>> {
    return request<IFindAllShopListingsActiveParameters, TResult>("/shops/:shop_id/listings/active", parameters, "GET");
}
/**
 * Finds all of a Shop's draft listings
 */
export function findAllShopListingsDraft <TResult>(parameters: IFindAllShopListingsDraftParameters): Promise<IStandardResponse<IFindAllShopListingsDraftParameters, TResult>> {
    return request<IFindAllShopListingsDraftParameters, TResult>("/shops/:shop_id/listings/draft", parameters, "GET");
}
/**
 * Retrieves Listings associated to a Shop that are expired
 */
export function findAllShopListingsExpired <TResult>(parameters: IFindAllShopListingsExpiredParameters): Promise<IStandardResponse<IFindAllShopListingsExpiredParameters, TResult>> {
    return request<IFindAllShopListingsExpiredParameters, TResult>("/shops/:shop_id/listings/expired", parameters, "GET");
}
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
export function getShopListingExpired <TResult>(parameters: IGetShopListingExpiredParameters): Promise<IStandardResponse<IGetShopListingExpiredParameters, TResult>> {
    return request<IGetShopListingExpiredParameters, TResult>("/shops/:shop_id/listings/expired/:listing_id", parameters, "GET");
}
/**
 * Retrieves Listings associated to a Shop that are featured
 */
export function findAllShopListingsFeatured <TResult>(parameters: IFindAllShopListingsFeaturedParameters): Promise<IStandardResponse<IFindAllShopListingsFeaturedParameters, TResult>> {
    return request<IFindAllShopListingsFeaturedParameters, TResult>("/shops/:shop_id/listings/featured", parameters, "GET");
}
/**
 * Retrieves Listings associated to a Shop that are inactive
 */
export function findAllShopListingsInactive <TResult>(parameters: IFindAllShopListingsInactiveParameters): Promise<IStandardResponse<IFindAllShopListingsInactiveParameters, TResult>> {
    return request<IFindAllShopListingsInactiveParameters, TResult>("/shops/:shop_id/listings/inactive", parameters, "GET");
}
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
export function getShopListingInactive <TResult>(parameters: IGetShopListingInactiveParameters): Promise<IStandardResponse<IGetShopListingInactiveParameters, TResult>> {
    return request<IGetShopListingInactiveParameters, TResult>("/shops/:shop_id/listings/inactive/:listing_id", parameters, "GET");
}
/**
 * Finds all listings within a shop section
 */
export function findAllShopSectionListings <TResult>(parameters: IFindAllShopSectionListingsParameters): Promise<IStandardResponse<IFindAllShopSectionListingsParameters, TResult>> {
    return request<IFindAllShopSectionListingsParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/listings", parameters, "GET");
}
/**
 * Finds all listings within a shop section
 */
export function findAllShopSectionListingsActive <TResult>(parameters: IFindAllShopSectionListingsActiveParameters): Promise<IStandardResponse<IFindAllShopSectionListingsActiveParameters, TResult>> {
    return request<IFindAllShopSectionListingsActiveParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/listings/active", parameters, "GET");
}
/**
 * Finds all listings in a given Cart
 */
export function findAllCartListings <TResult>(parameters: IFindAllCartListingsParameters): Promise<IStandardResponse<IFindAllCartListingsParameters, TResult>> {
    return request<IFindAllCartListingsParameters, TResult>("/users/:user_id/carts/:cart_id/listings", parameters, "GET");
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
    findBrowseSegmentListings,
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
