import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ImageType extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Lists available image types along with their supported sizes.
     */
    async listImageTypes<TResult>(
        params: IListImageTypesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IListImageTypesParameters, TResult>>> {
        return this.request<IListImageTypesParameters, TResult>("GET", "/image_types", params, extra);
    }
}
