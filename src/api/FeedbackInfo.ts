import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";

//fields
export interface IFeedbackInfo {
    /**
     * The number of feedbacks.
     */
    count: number,
    /**
     * The feedback score percentage.
     */
    score: number
}

//parameters types


//methods class
export class FeedbackInfo {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


}
