import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function getShopAbout<TResult>(parameters: IGetShopAboutParameters): Promise<IStandardResponse<IGetShopAboutParameters, TResult>>;
export declare const ShopAbout: {
    getShopAbout: <TResult>(parameters: IGetShopAboutParameters) => Promise<IStandardResponse<IGetShopAboutParameters, TResult>>;
};
