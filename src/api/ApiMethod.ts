import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ApiMethod extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a list of all methods available.
     */
    async getMethodTable<TResult>(
        params: IGetMethodTableParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetMethodTableParameters, TResult>>> {
        return this.request<IGetMethodTableParameters, TResult>("GET", "/", params, extra);
    }
}
