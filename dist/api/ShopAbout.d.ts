import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShopAbout {
    shop_id: number;
    status: string;
    story_headline: string;
    story_leading_paragraph: string;
    story: string;
    related_links: string[];
    url: string;
}
export interface IGetShopAboutParameters extends IStandardParameters {
    shop_id: string | number;
}
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
declare function getShopAbout<TResult>(parameters: IGetShopAboutParameters, options?: IOptions): Promise<IStandardResponse<IGetShopAboutParameters, TResult>>;
export declare const ShopAbout: {
    getShopAbout: typeof getShopAbout;
};
export {};
