import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class TreasuryCounts extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


}
