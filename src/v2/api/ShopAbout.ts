import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IGetShopAboutParameters {
    shop_id: string | number
}

//methods class
export class ShopAbout extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    async getShopAbout<TResult>(
        params: IGetShopAboutParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShopAboutParameters, TResult>>> {
        return this.request<IGetShopAboutParameters, TResult>("GET", "/shops/:shop_id/about", params, extra);
    }
}
