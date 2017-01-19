import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IStyle {
    style_id: number,
    style: string
}

export interface IFindSuggestedStylesParameters extends IStandardParameters {

}

/**
 * Retrieve all suggested styles.
 */
export function findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters): Bluebird<IStandardResponse<TResult, IFindSuggestedStylesParameters>> {
    return request<IStandardResponse<TResult, IFindSuggestedStylesParameters>>(parameters, '/taxonomy/styles', 'GET');
}
