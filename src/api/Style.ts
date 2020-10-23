import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IStyle {
    /**
     * Style ID for this style
     */
    style_id: number,
    /**
     * Style Name
     */
    style: string
}

//parameters types
export interface IFindSuggestedStylesParameters extends IStandardParameters {

}

//methods class
export class Style {

    /**
     * Retrieve all suggested styles.
     */
    static findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters, options?: IOptions): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>> {
        return request<IFindSuggestedStylesParameters, TResult>("/taxonomy/styles", parameters, "GET", options);
    }
}
