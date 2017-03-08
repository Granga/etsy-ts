import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function listImageTypes <TResult>(parameters: IListImageTypesParameters): Promise<IStandardResponse<IListImageTypesParameters, TResult>> {
    return request<IListImageTypesParameters, TResult>("/image_types", parameters, "GET");
}

export const ImageType = {listImageTypes};
