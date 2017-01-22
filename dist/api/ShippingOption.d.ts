import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IShippingOption {
    option_id: string;
    name: string;
    option_type: number;
    cost: string;
    currency_code: string;
}
export declare class ShippingOption {
    private client;
    constructor(client: EtsyApiClient);
}
