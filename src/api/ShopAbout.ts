import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IShopAbout {
    shop_id: number,
    status: string,
    story_headline: string,
    story_leading_paragraph: string,
    story: string,
    related_links: string[],
    url: string
}


export interface IGetShopAboutParameters extends IStandardParameters {
    shop_id: string | number
}

export class ShopAbout {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    getShopAbout<TResult>(parameters: IGetShopAboutParameters): Promise<IStandardResponse<IGetShopAboutParameters, TResult>> {
        return this.client.http<IGetShopAboutParameters, TResult>("/shops/:shop_id/about", parameters, "GET");
    }
}
