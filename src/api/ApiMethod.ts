import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IApiMethod {
    name: string,
    uri: string,
    params: any,
    defaults: any,
    type: string,
    visibility: string,
    http_method: string
}

//parameters types
export interface IGetMethodTableParameters extends IStandardParameters {

}

//methods
/**
 * Get a list of all methods available.
 */
function getMethodTable <TResult>(parameters: IGetMethodTableParameters, options?: IOptions): Promise<IStandardResponse<IGetMethodTableParameters, TResult>> {
    return request<IGetMethodTableParameters, TResult>("/", parameters, "GET", options);
}

export const ApiMethod = {getMethodTable};
