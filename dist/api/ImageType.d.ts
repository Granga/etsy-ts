import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function listImageTypes<TResult>(parameters: IListImageTypesParameters): Promise<IStandardResponse<IListImageTypesParameters, TResult>>;
export declare const ImageType: {
    listImageTypes: <TResult>(parameters: IListImageTypesParameters) => Promise<IStandardResponse<IListImageTypesParameters, TResult>>;
};
