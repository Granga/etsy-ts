import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
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
    constructor(config: AxiosRequestConfig, apiKeys: Token);
}
