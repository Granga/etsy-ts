import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IStyle {
    style_id: number;
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
export declare const Style: {
    findSuggestedStyles: <TResult>(parameters: IFindSuggestedStylesParameters, options?: IOptions) => Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>>;
};
