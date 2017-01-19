import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IImageType {
    code: string,
    desc: string,
    sizes: string[]
}

export interface IListImageTypesParameters extends IStandardParameters {

}

/**
 * Lists available image types along with their supported sizes.
 */
export function listImageTypes<TResult>(parameters: IListImageTypesParameters): Bluebird<IStandardResponse<TResult, IListImageTypesParameters>> {
    return request<IStandardResponse<TResult, IListImageTypesParameters>>(parameters, '/image_types', 'GET');
}
