import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
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
    constructor(config: AxiosRequestConfig, apiKeys: Token);
}
