import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IImageType {
    /**
     * Code for this image type, used in image URLs
     */
    code: string;
    /**
     * Text description of the image type
     */
    desc: string;
    /**
     * Available sizes for this image type
     */
    sizes: string[];
}
export interface IListImageTypesParameters {
}
export declare class ImageType {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Lists available image types along with their supported sizes.
     */
    listImageTypes<TResult>(params: IListImageTypesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IListImageTypesParameters, TResult>>>;
}
