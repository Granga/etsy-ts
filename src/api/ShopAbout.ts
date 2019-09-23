import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IShopAbout {
    /**
     * Numeric ID of the shop section.
     */
    shop_id: number,
    /**
     * Status of this data: active or draft. Only Shop owners can see drafts.
     */
    status: string,
    /**
     * ShopAbout headline text
     */
    story_headline: string,
    /**
     * The first part of the ShopAbout story
     */
    story_leading_paragraph: string,
    /**
     * The full ShopAbout story text
     */
    story: string,
    /**
     * The ShopAbout related links
     */
    related_links: string[],
    /**
     * URL to the Shop About page on the site.
     */
    url: string
}

//parameters types
export interface IGetShopAboutParameters extends IStandardParameters {
    shop_id: string | number
}

//methods
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
function getShopAbout<TResult>(parameters: IGetShopAboutParameters, options?: IOptions): Promise<IStandardResponse<IGetShopAboutParameters, TResult>> {
    return request<IGetShopAboutParameters, TResult>("/shops/:shop_id/about", parameters, "GET", options);
}

export const ShopAbout = {getShopAbout};
