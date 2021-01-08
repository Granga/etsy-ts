import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IApiMethod {
    /**
     * The method's descriptive name.
     */
    name: string,
    /**
     * The method's URI pattern.  Parameters are marked with a leading colon.
     */
    uri: string,
    /**
     * An array of method parameters and types.
     */
    params: any,
    /**
     * An array of default values for parameters.  Parameters that lack a default are required.
     */
    defaults: any,
    /**
     * The resource type returned by the method.
     */
    type: string,
    /**
     * The method's visibility level.  Methods marked "private" require authentication.
     */
    visibility: string,
    /**
     * The HTTP method used to call the API method.
     */
    http_method: string
}

//parameters types
export interface IGetMethodTableParameters {

}

//methods class
export class ApiMethod {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Get a list of all methods available.
     */
    async getMethodTable<TResult>(
        params: IGetMethodTableParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetMethodTableParameters, TResult>>> {
        return request<IGetMethodTableParameters, TResult>(
            {...this.config, url: "/", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }
}
