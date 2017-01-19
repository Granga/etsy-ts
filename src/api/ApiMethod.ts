import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IApiMethod {
    name: string,
    uri: string,
    params: any,
    defaults: any,
    type: string,
    visibility: string,
    http_method: string
}

export interface IGetMethodTableParameters extends IStandardParameters {

}

/**
 * Get a list of all methods available.
 */
export function getMethodTable<TResult>(parameters: IGetMethodTableParameters): Bluebird<IStandardResponse<TResult, IGetMethodTableParameters>> {
    return request<IStandardResponse<TResult, IGetMethodTableParameters>>(parameters, '/', 'GET');
}
