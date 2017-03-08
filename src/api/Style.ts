import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function findSuggestedStyles <TResult>(parameters: IFindSuggestedStylesParameters): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>> {
    return request<IFindSuggestedStylesParameters, TResult>("/taxonomy/styles", parameters, "GET");
}

export const Style = {findSuggestedStyles};
