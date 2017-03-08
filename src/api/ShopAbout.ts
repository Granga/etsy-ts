import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IShopAbout {
    shop_id: number,
    status: string,
    story_headline: string,
    story_leading_paragraph: string,
    story: string,
    related_links: string[],
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
export function getShopAbout <TResult>(parameters: IGetShopAboutParameters): Promise<IStandardResponse<IGetShopAboutParameters, TResult>> {
    return request<IGetShopAboutParameters, TResult>("/shops/:shop_id/about", parameters, "GET");
}

export const ShopAbout = {getShopAbout};
