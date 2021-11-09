import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IFindSuggestedStylesParameters {

}

//methods class
export class Style extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieve all suggested styles.
     */
    async findSuggestedStyles<TResult>(
        params: IFindSuggestedStylesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindSuggestedStylesParameters, TResult>>> {
        return this.request<IFindSuggestedStylesParameters, TResult>("GET", "/taxonomy/styles", params, extra);
    }
}
