import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IImageType {
    /**
     * Code for this image type, used in image URLs
     */
    code: string,
    /**
     * Text description of the image type
     */
    desc: string,
    /**
     * Available sizes for this image type
     */
    sizes: string[]
}

//parameters types
export interface IListImageTypesParameters {

}

//methods class
export class ImageType {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Lists available image types along with their supported sizes.
     */
    async listImageTypes<TResult>(
        params: IListImageTypesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IListImageTypesParameters, TResult>>> {
        return request<IListImageTypesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/image_types",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
