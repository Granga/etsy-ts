import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IStyle {
    style_id: number,
    style: string
}


export interface IFindSuggestedStylesParameters extends IStandardParameters {

}

export class Style {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieve all suggested styles.
     */
    findSuggestedStyles<TResult>(parameters: IFindSuggestedStylesParameters): Promise<IStandardResponse<IFindSuggestedStylesParameters, TResult>> {
        return this.client.http<IFindSuggestedStylesParameters, TResult>("/taxonomy/styles", parameters, "GET");
    }
}
