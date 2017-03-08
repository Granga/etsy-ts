import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IStyle {
    style_id: number;
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
/**
 * Retrieve all suggested styles.
 */
export declare function findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>>;
export declare const Style: {
    findSuggestedStyles: <TResult>(parameters: IFindSuggestedStylesParameters) => Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>>;
};
