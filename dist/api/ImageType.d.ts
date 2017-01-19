/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function listImageTypes<TResult>(parameters: IListImageTypesParameters): Bluebird<IStandardResponse<TResult, IListImageTypesParameters>>;
