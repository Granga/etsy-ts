import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class ShopAbout {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    async getShopAbout<TResult>(
        params: IGetShopAboutParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetShopAboutParameters, TResult>>> {
        return request<IGetShopAboutParameters, TResult>(
            {...this.config, url: "/shops/:shop_id/about", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }
}
