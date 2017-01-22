import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IShopAboutImage {
    shop_id: number;
    image_id: number;
    caption: string;
    rank: number;
    url_178x178: string;
    url_545xN: string;
    url_760xN: string;
    url_fullxfull: string;
}
export declare class ShopAboutImage {
    private client;
    constructor(client: EtsyApiClient);
}
