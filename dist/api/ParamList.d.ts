import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
export interface IParamList {
    /**
     * Each field in the record represents an Etsy API method parameter.  The value corresponds to one of the documented data or resource types.
     */
    param_name: string;
}
export declare class ParamList {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
}
