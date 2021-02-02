import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
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
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieve all suggested styles.
     */
    async findSuggestedStyles<TResult>(
        params: IFindSuggestedStylesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindSuggestedStylesParameters, TResult>>> {
        return request<IFindSuggestedStylesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/taxonomy/styles",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
