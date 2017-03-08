import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IApiMethod {
    name: string;
    uri: string;
    params: any;
    defaults: any;
    type: string;
    visibility: string;
    http_method: string;
}
export interface IGetMethodTableParameters extends IStandardParameters {
}
/**
 * Get a list of all methods available.
 */
export declare function getMethodTable<TResult>(parameters: IGetMethodTableParameters): Promise<IStandardResponse<IGetMethodTableParameters, TResult>>;
export declare const ApiMethod: {
    getMethodTable: <TResult>(parameters: IGetMethodTableParameters) => Promise<IStandardResponse<IGetMethodTableParameters, TResult>>;
};
