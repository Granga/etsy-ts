import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

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
export interface IListImageTypesParameters extends IStandardParameters {

}

//methods class
export class ImageType {

    /**
     * Lists available image types along with their supported sizes.
     */
    static listImageTypes<TResult>(parameters: IListImageTypesParameters, options?: IOptions): Promise<IStandardResponse<IListImageTypesParameters, TResult>> {
        return request<IListImageTypesParameters, TResult>("/image_types", parameters, "GET", options);
    }
}
