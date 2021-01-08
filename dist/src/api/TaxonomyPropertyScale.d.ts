import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
export interface ITaxonomyPropertyScale {
    /**
     * The ID of the scale.
     */
    scale_id: number;
    /**
     * How to label the scale.
     */
    display_name: string;
    /**
     * A description of the scale.
     */
    description: string;
}
export declare class TaxonomyPropertyScale {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
}
