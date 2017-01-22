import { EtsyApiClient } from "../client/EtsyApiClient";
export interface ITreasuryListingData {
    user_id: number;
    title: string;
    price: number;
    currency_code: string;
    listing_id: number;
    state: string;
    shop_name: string;
    image_id: number;
    image_url_75x75: string;
    image_url_170x135: string;
}
export declare class TreasuryListingData {
    private client;
    constructor(client: EtsyApiClient);
}
