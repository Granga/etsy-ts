import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IImageType {
    code: string,
    desc: string,
    sizes: string[]
}

//parameters types
export interface IListImageTypesParameters extends IStandardParameters {

}

//methods
/**
 * Lists available image types along with their supported sizes.
 */
function listImageTypes <TResult>(parameters: IListImageTypesParameters, options?: IOptions): Promise<IStandardResponse<IListImageTypesParameters, TResult>> {
    return request<IListImageTypesParameters, TResult>("/image_types", parameters, "GET", options);
}

export const ImageType = {listImageTypes};
