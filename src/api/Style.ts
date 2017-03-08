import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IStyle {
    style_id: number,
    style: string
}

//parameters types
export interface IFindSuggestedStylesParameters extends IStandardParameters {

}

//methods
/**
 * Retrieve all suggested styles.
 */
function findSuggestedStyles <TResult>(parameters: IFindSuggestedStylesParameters, options?: IOptions): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>> {
    return request<IFindSuggestedStylesParameters, TResult>("/taxonomy/styles", parameters, "GET", options);
}

export const Style = {findSuggestedStyles};
