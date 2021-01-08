import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
export interface ITaxonomyPropertyValue {
    /**
     * The numeric ID of this value.
     */
    value_id: number;
    /**
     * How to display the value.
     */
    name: string;
    /**
     * The ID of the scale this belongs to (if any).
     */
    scale_id: number;
    /**
     * The order of this value under its property
     */
    order: number;
    /**
     * The list of values this value is equal to (if any).
     */
    equal_to: number[];
}
export declare class TaxonomyPropertyValue {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
}
