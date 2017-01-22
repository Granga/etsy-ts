import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ISegmentPoster {
    name: string,
    path: string,
    image_url: string,
    shop_id: number,
    shop_name: number,
    weight: number,
    listing_id: number
}


export interface IFindBrowseSegmentPostersParameters extends IStandardParameters {
    path?: string
}

export class SegmentPoster {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Find Browse SegmentPosters by Segment slug
     */
    findBrowseSegmentPosters<TResult>(parameters: IFindBrowseSegmentPostersParameters): Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>> {
        return this.client.http<IFindBrowseSegmentPostersParameters, TResult>("/segments/posters", parameters, "GET");
    }
}
