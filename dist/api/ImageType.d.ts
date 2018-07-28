import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IImageType {
    code: string;
    desc: string;
    sizes: string[];
}
export interface IListImageTypesParameters extends IStandardParameters {
}
/**
 * Lists available image types along with their supported sizes.
 */
declare function listImageTypes<TResult>(parameters: IListImageTypesParameters, options?: IOptions): Promise<IStandardResponse<IListImageTypesParameters, TResult>>;
export declare const ImageType: {
    listImageTypes: typeof listImageTypes;
};
export {};
