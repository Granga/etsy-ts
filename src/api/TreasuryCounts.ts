import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";

//fields
export interface ITreasuryCounts {
    /**
     * The number of times the Treasury has been clicked on
     */
    clicks: number,
    /**
     * The number of times the Treasury has been viewed
     */
    views: number,
    /**
     * The number of times the Treasury has been shared
     */
    shares: number,
    /**
     * The number of times the Treasury has been reported
     */
    reports: number
}

//parameters types


//methods class
export class TreasuryCounts {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


}
