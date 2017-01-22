import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IFeedbackInfo {
    count: number;
    score: number;
}
export declare class FeedbackInfo {
    private client;
    constructor(client: EtsyApiClient);
}
