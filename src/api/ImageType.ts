import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
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
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Lists available image types along with their supported sizes.
     */
    async listImageTypes<TResult>(
        params: IListImageTypesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IListImageTypesParameters, TResult>>> {
        return request<IListImageTypesParameters, TResult>(
            {...this.config, url: "/image_types", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }
}
