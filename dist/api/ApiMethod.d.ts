import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const ApiMethod: {
    getMethodTable: <TResult>(parameters: IGetMethodTableParameters, options?: IOptions) => Promise<IStandardResponse<IGetMethodTableParameters, TResult>>;
};
