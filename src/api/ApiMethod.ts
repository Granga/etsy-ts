import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function getMethodTable <TResult>(parameters: IGetMethodTableParameters): Promise<IStandardResponse<IGetMethodTableParameters, TResult>> {
    return request<IGetMethodTableParameters, TResult>("/", parameters, "GET");
}

export const ApiMethod = {getMethodTable};
