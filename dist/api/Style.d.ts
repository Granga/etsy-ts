/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IStyle {
    style_id: number;
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
/**
* Retrieve all suggested styles.
*/
export declare function findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters): Bluebird<IStandardResponse<TResult, IFindSuggestedStylesParameters>>;
