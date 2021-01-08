import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
export interface IFeedbackInfo {
    /**
     * The number of feedbacks.
     */
    count: number;
    /**
     * The feedback score percentage.
     */
    score: number;
}
export declare class FeedbackInfo {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
}
