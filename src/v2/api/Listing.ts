import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
    when_made: "made_to_order" | "2020_2023" | "2010_2019" | "2004_2009" | "before_2004" | "2000_2003" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
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
export interface ICreateListingParameters {
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
    when_made: "made_to_order" | "2020_2023" | "2010_2019" | "2004_2009" | "before_2004" | "2000_2003" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
    style?: string[]
}

export interface IFindAllFeaturedListingsParameters {
    limit?: number,
    offset?: number,
    page?: number,
    region?: string
}

export interface IGetListingParameters {
    listing_id: number[]
}

export interface IUpdateListingParameters {
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
    when_made?: "made_to_order" | "2020_2023" | "2010_2019" | "2004_2009" | "before_2004" | "2000_2003" | "1990s" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700",
    style?: string[],
    processing_min?: number,
    processing_max?: number,
    featured_rank?: number
}

export interface IDeleteListingParameters {
    listing_id: number
}

export interface IFindAllListingActiveParameters {
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

export interface IGetInterestingListingsParameters {
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetTrendingListingsParameters {
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllListingsForFeaturedTreasuryIdParameters {
    featured_treasury_id: number
}

export interface IFindAllActiveListingsForFeaturedTreasuryIdParameters {
    featured_treasury_id: number
}

export interface IFindAllCurrentFeaturedListingsParameters {
    region?: string
}

export interface IFindAllReceiptListingsParameters {
    limit?: number,
    offset?: number,
    page?: number,
    receipt_id: number
}

export interface IFindAllShopListingsActiveParameters {
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

export interface IFindAllShopListingsDraftParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllShopListingsExpiredParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetShopListingExpiredParameters {
    shop_id: string | number,
    listing_id: number
}

export interface IFindAllShopListingsFeaturedParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllShopListingsInactiveParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetShopListingInactiveParameters {
    shop_id: string | number,
    listing_id: number
}

export interface IFindAllShopSectionListingsParameters {
    limit?: number,
    offset?: number,
    page?: number,
    shop_id: string | number,
    shop_section_id: number
}

export interface IFindAllShopSectionListingsActiveParameters {
    limit?: number,
    offset?: number,
    page?: number,
    shop_id: string | number,
    shop_section_id: number[],
    sort_on?: "created" | "price",
    sort_order?: "up" | "down"
}

export interface IFindAllCartListingsParameters {
    user_id: string | number,
    cart_id: string | number
}

//methods class
export class Listing extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Creates a new Listing.
     */
    async createListing<TResult>(
        params: ICreateListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateListingParameters, TResult>>> {
        return this.request<ICreateListingParameters, TResult>("POST", "/listings", params, extra);
    }

    /**
     * Finds all FeaturedTreasury listings.
     */
    async findAllFeaturedListings<TResult>(
        params: IFindAllFeaturedListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedListingsParameters, TResult>>> {
        return this.request<IFindAllFeaturedListingsParameters, TResult>("GET", "/featured_treasuries/listings", params, extra);
    }

    /**
     * Retrieves a Listing by id.
     */
    async getListing<TResult>(
        params: IGetListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetListingParameters, TResult>>> {
        return this.request<IGetListingParameters, TResult>("GET", "/listings/:listing_id", params, extra);
    }

    /**
     * Updates a Listing
     */
    async updateListing<TResult>(
        params: IUpdateListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateListingParameters, TResult>>> {
        return this.request<IUpdateListingParameters, TResult>("PUT", "/listings/:listing_id", params, extra);
    }

    /**
     * Deletes a Listing
     */
    async deleteListing<TResult>(
        params: IDeleteListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingParameters, TResult>>> {
        return this.request<IDeleteListingParameters, TResult>("DELETE", "/listings/:listing_id", params, extra);
    }

    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    async findAllListingActive<TResult>(
        params: IFindAllListingActiveParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingActiveParameters, TResult>>> {
        return this.request<IFindAllListingActiveParameters, TResult>("GET", "/listings/active", params, extra);
    }

    /**
     * Collects the list of interesting listings
     */
    async getInterestingListings<TResult>(
        params: IGetInterestingListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetInterestingListingsParameters, TResult>>> {
        return this.request<IGetInterestingListingsParameters, TResult>("GET", "/listings/interesting", params, extra);
    }

    /**
     * Collects the list of listings used to generate the trending listing page
     */
    async getTrendingListings<TResult>(
        params: IGetTrendingListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetTrendingListingsParameters, TResult>>> {
        return this.request<IGetTrendingListingsParameters, TResult>("GET", "/listings/trending", params, extra);
    }

    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    async findAllListingsForFeaturedTreasuryId<TResult>(
        params: IFindAllListingsForFeaturedTreasuryIdParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>>> {
        return this.request<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>(
            "GET",
            "/featured_treasuries/:featured_treasury_id/listings",
            params,
            extra
        );
    }

    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    async findAllActiveListingsForFeaturedTreasuryId<TResult>(
        params: IFindAllActiveListingsForFeaturedTreasuryIdParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>>> {
        return this.request<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>(
            "GET",
            "/featured_treasuries/:featured_treasury_id/listings/active",
            params,
            extra
        );
    }

    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    async findAllCurrentFeaturedListings<TResult>(
        params: IFindAllCurrentFeaturedListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllCurrentFeaturedListingsParameters, TResult>>> {
        return this.request<IFindAllCurrentFeaturedListingsParameters, TResult>(
            "GET",
            "/featured_treasuries/listings/homepage_current",
            params,
            extra
        );
    }

    /**
     * Finds all listings in a receipt
     */
    async findAllReceiptListings<TResult>(
        params: IFindAllReceiptListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllReceiptListingsParameters, TResult>>> {
        return this.request<IFindAllReceiptListingsParameters, TResult>("GET", "/receipts/:receipt_id/listings", params, extra);
    }

    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    async findAllShopListingsActive<TResult>(
        params: IFindAllShopListingsActiveParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopListingsActiveParameters, TResult>>> {
        return this.request<IFindAllShopListingsActiveParameters, TResult>("GET", "/shops/:shop_id/listings/active", params, extra);
    }

    /**
     * Finds all of a Shop's draft listings
     */
    async findAllShopListingsDraft<TResult>(
        params: IFindAllShopListingsDraftParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopListingsDraftParameters, TResult>>> {
        return this.request<IFindAllShopListingsDraftParameters, TResult>("GET", "/shops/:shop_id/listings/draft", params, extra);
    }

    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    async findAllShopListingsExpired<TResult>(
        params: IFindAllShopListingsExpiredParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopListingsExpiredParameters, TResult>>> {
        return this.request<IFindAllShopListingsExpiredParameters, TResult>("GET", "/shops/:shop_id/listings/expired", params, extra);
    }

    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    async getShopListingExpired<TResult>(
        params: IGetShopListingExpiredParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShopListingExpiredParameters, TResult>>> {
        return this.request<IGetShopListingExpiredParameters, TResult>("GET", "/shops/:shop_id/listings/expired/:listing_id", params, extra);
    }

    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    async findAllShopListingsFeatured<TResult>(
        params: IFindAllShopListingsFeaturedParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopListingsFeaturedParameters, TResult>>> {
        return this.request<IFindAllShopListingsFeaturedParameters, TResult>("GET", "/shops/:shop_id/listings/featured", params, extra);
    }

    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    async findAllShopListingsInactive<TResult>(
        params: IFindAllShopListingsInactiveParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopListingsInactiveParameters, TResult>>> {
        return this.request<IFindAllShopListingsInactiveParameters, TResult>("GET", "/shops/:shop_id/listings/inactive", params, extra);
    }

    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    async getShopListingInactive<TResult>(
        params: IGetShopListingInactiveParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShopListingInactiveParameters, TResult>>> {
        return this.request<IGetShopListingInactiveParameters, TResult>("GET", "/shops/:shop_id/listings/inactive/:listing_id", params, extra);
    }

    /**
     * Finds all listings within a shop section
     */
    async findAllShopSectionListings<TResult>(
        params: IFindAllShopSectionListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopSectionListingsParameters, TResult>>> {
        return this.request<IFindAllShopSectionListingsParameters, TResult>(
            "GET",
            "/shops/:shop_id/sections/:shop_section_id/listings",
            params,
            extra
        );
    }

    /**
     * Finds all listings within a shop section
     */
    async findAllShopSectionListingsActive<TResult>(
        params: IFindAllShopSectionListingsActiveParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopSectionListingsActiveParameters, TResult>>> {
        return this.request<IFindAllShopSectionListingsActiveParameters, TResult>(
            "GET",
            "/shops/:shop_id/sections/:shop_section_id/listings/active",
            params,
            extra
        );
    }

    /**
     * Finds all listings in a given Cart
     */
    async findAllCartListings<TResult>(
        params: IFindAllCartListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllCartListingsParameters, TResult>>> {
        return this.request<IFindAllCartListingsParameters, TResult>("GET", "/users/:user_id/carts/:cart_id/listings", params, extra);
    }
}
