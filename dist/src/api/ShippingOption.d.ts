import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
export interface IShippingOption {
    /**
     * The ID of the shipping option.
     */
    option_id: string;
    /**
     * The name of the shipping option.
     */
    name: string;
    /**
     * The type of shipping option.
     */
    option_type: number;
    /**
     * The total cart shipping price if the shipping option is selected.
     */
    cost: string;
    /**
     * The ISO (alphabetic) code for the shipping option's currency.
     */
    currency_code: string;
}
export declare class ShippingOption {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
}
