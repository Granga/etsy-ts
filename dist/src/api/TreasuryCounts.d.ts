import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
export interface ITreasuryCounts {
    /**
     * The number of times the Treasury has been clicked on
     */
    clicks: number;
    /**
     * The number of times the Treasury has been viewed
     */
    views: number;
    /**
     * The number of times the Treasury has been shared
     */
    shares: number;
    /**
     * The number of times the Treasury has been reported
     */
    reports: number;
}
export declare class TreasuryCounts {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
}
