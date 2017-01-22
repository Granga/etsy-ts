import {EtsyApiClient} from "../client/EtsyApiClient";

export interface ITreasuryCounts {
    clicks: number,
    views: number,
    shares: number,
    reports: number
}


export class TreasuryCounts {
    constructor(private client: EtsyApiClient) {

    }


}
