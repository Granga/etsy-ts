import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IFeedbackInfo {
    count: number,
    score: number
}


export class FeedbackInfo {
    constructor(private client: EtsyApiClient) {

    }


}
