import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";

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
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


}
