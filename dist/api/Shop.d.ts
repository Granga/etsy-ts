import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IShop {
    /**
     * The shop's numeric ID.
     */
    shop_id: number;
    /**
     * The shop's name.
     */
    shop_name: string;
    /**
     @deprecated
     * The first line of the shops address.

     Deprecated: use UserAddress.first_line instead.
     */
    first_line: string;
    /**
     @deprecated
     * The second line of the shops address.

     Deprecated: use UserAddress.second_line instead.
     */
    second_line: string;
    /**
     @deprecated
     * The city the shop is in.

     Deprecated: use UserAddress.city instead.
     */
    city: string;
    /**
     @deprecated
     * The state the shop is in.

     Deprecated: use UserAddress.state instead.
     */
    state: string;
    /**
     @deprecated
     * The zip code the shop is in.

     Deprecated: use UserAddress.zip instead.
     */
    zip: string;
    /**
     @deprecated
     * The numeric ID of the country the shop is in.

     Deprecated: use UserAddress.country_id instead.
     */
    country_id: number;
    /**
     * The numeric ID of the user that owns this shop.
     */
    user_id: number;
    /**
     * The date and time the shop was created, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * A brief heading for the shop's main page.
     */
    title: string;
    /**
     * An announcement to buyers that displays on the shop's homepage.
     */
    announcement: string;
    /**
     * The ISO code (alphabetic) for the seller's native currency.
     */
    currency_code: string;
    /**
     * If the seller is not currently accepting purchases, 1, blank otherwise.
     */
    is_vacation: boolean;
    /**
     * If is_vacation=1, a message to buyers.
     */
    vacation_message: string;
    /**
     * A message that is sent to users who buy from this shop.
     */
    sale_message: string;
    /**
     * A message that is sent to users who buy a digital item from this shop.
     */
    digital_sale_message: string;
    /**
     * The date and time the shop was last updated, in epoch seconds.
     */
    last_updated_tsz: number;
    /**
     * The number of active listings in the shop.
     */
    listing_active_count: number;
    /**
     * Number of digital listings the shop has.
     */
    digital_listing_count: number;
    /**
     * The user's login name.
     */
    login_name: string;
    /**
     * The latitude of the shop.
     */
    lat: number;
    /**
     * The longitude of the shop.
     */
    lon: number;
    /**
     * True if the shop accepts requests for custom items.
     */
    accepts_custom_requests: boolean;
    /**
     * The introductory text from the top of the seller's policies page (may be blank).
     */
    policy_welcome: string;
    /**
     * The seller's policy on payment (may be blank).
     */
    policy_payment: string;
    /**
     * The seller's policy on shipping (may be blank).
     */
    policy_shipping: string;
    /**
     * The seller's policy on refunds (may be blank).
     */
    policy_refunds: string;
    /**
     * Any additional policy information the seller provides (may be blank).
     */
    policy_additional: string;
    /**
     * The shop's seller information (may be blank).
     */
    policy_seller_info: string;
    /**
     * The date and time the shop was last updated, in epoch seconds.
     */
    policy_updated_tsz: number;
    /**
     * True if seller has private info to show in EU receipts
     */
    policy_has_private_receipt_info: boolean;
    /**
     * If is_vacation=1, a message to buyers in response to new convos.
     */
    vacation_autoreply: string;
    /**
     * The shop's Google Analytics code.
     */
    ga_code: string;
    /**
     @deprecated
     * The shop owner's real name.

     Deprecated: use UserAddress.name instead.
     */
    name: string;
    /**
     * The URL of the shop
     */
    url: string;
    /**
     * The URL to the shop's banner image.
     */
    image_url_760x100: string;
    /**
     * The number of members who've marked this Shop as a favorite
     */
    num_favorers: number;
    /**
     * The languages that this Shop is enrolled in.
     */
    languages: string[];
    /**
     * the id of the next upcoming event this hops is attending, that is near the user.
     */
    upcoming_local_event_id: number;
    /**
     * The url of the shop full-sized shop icon.
     */
    icon_url_fullxfull: string;
    /**
     * True if shop has accepted using structured policies.
     */
    is_using_structured_policies: boolean;
    /**
     * True if shop has viewed structured policies onboarding and accepted OR declined.
     */
    has_onboarded_structured_policies: boolean;
    /**
     * True if shop has any unstructured policy fields filled out.
     */
    has_unstructured_policies: boolean;
    /**
     * Privacy policy information the seller provides (may be blank).
     */
    policy_privacy: string;
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean;
    /**
     * True if shop policies include a link to EU online dispute form
     */
    include_dispute_form_link: boolean;
}
export interface IFindAllShopsParameters {
    shop_name?: string;
    limit?: number;
    offset?: number;
    page?: number;
    lat?: number;
    lon?: number;
    distance_max?: number;
}
export interface IGetShopParameters {
    shop_id: (string | number)[];
}
export interface IUpdateShopParameters {
    shop_id: string | number;
    title?: string;
    announcement?: string;
    sale_message?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_privacy?: string;
    policy_seller_info?: string;
    digital_sale_message?: string;
}
export interface IUploadShopBannerParameters {
    shop_id: string | number;
    image: any;
}
export interface IDeleteShopBannerParameters {
    shop_id: string | number;
}
export interface IGetListingShopParameters {
    listing_id: number;
}
export interface IFindAllUserShopsParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Shop {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    findAllShops<TResult>(params: IFindAllShopsParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllShopsParameters, TResult>>>;
    /**
     * Retrieves a Shop by id.
     */
    getShop<TResult>(params: IGetShopParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetShopParameters, TResult>>>;
    /**
     * Updates a Shop
     */
    updateShop<TResult>(params: IUpdateShopParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateShopParameters, TResult>>>;
    /**
     * Upload a new shop banner image
     */
    uploadShopBanner<TResult>(params: IUploadShopBannerParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUploadShopBannerParameters, TResult>>>;
    /**
     * Deletes a shop banner image
     */
    deleteShopBanner<TResult>(params: IDeleteShopBannerParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteShopBannerParameters, TResult>>>;
    /**
     * Retrieves a shop by a listing id.
     */
    getListingShop<TResult>(params: IGetListingShopParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetListingShopParameters, TResult>>>;
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    findAllUserShops<TResult>(params: IFindAllUserShopsParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllUserShopsParameters, TResult>>>;
}
