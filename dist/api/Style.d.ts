import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IStyle {
    style_id: number;
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
export declare class Style {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieve all suggested styles.
     */
    findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>>;
}
