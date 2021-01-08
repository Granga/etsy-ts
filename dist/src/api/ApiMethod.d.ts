import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IApiMethod {
    /**
     * The method's descriptive name.
     */
    name: string;
    /**
     * The method's URI pattern.  Parameters are marked with a leading colon.
     */
    uri: string;
    /**
     * An array of method parameters and types.
     */
    params: any;
    /**
     * An array of default values for parameters.  Parameters that lack a default are required.
     */
    defaults: any;
    /**
     * The resource type returned by the method.
     */
    type: string;
    /**
     * The method's visibility level.  Methods marked "private" require authentication.
     */
    visibility: string;
    /**
     * The HTTP method used to call the API method.
     */
    http_method: string;
}
export interface IGetMethodTableParameters {
}
export declare class ApiMethod {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Get a list of all methods available.
     */
    getMethodTable<TResult>(params: IGetMethodTableParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetMethodTableParameters, TResult>>>;
}
