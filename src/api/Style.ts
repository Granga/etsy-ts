import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class Style {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieve all suggested styles.
     */
    async findSuggestedStyles<TResult>(
        params: IFindSuggestedStylesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindSuggestedStylesParameters, TResult>>> {
        return request<IFindSuggestedStylesParameters, TResult>({
            ...this.config,
            url: "/taxonomy/styles",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
