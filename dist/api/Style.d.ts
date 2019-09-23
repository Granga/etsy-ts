import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IStyle {
    /**
     * Style ID for this style
     */
    style_id: number;
    /**
     * Style Name
     */
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
/**
 * Retrieve all suggested styles.
 */
declare function findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters, options?: IOptions): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>>;
export declare const Style: {
    findSuggestedStyles: typeof findSuggestedStyles;
};
export {};
