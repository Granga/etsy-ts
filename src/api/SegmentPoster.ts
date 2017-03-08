import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ISegmentPoster {
    name: string,
    path: string,
    image_url: string,
    shop_id: number,
    shop_name: number,
    weight: number,
    listing_id: number
}

//parameters types

export interface IFindBrowseSegmentPostersParameters extends IStandardParameters {
    path?: string
}

//methods

/**
 * Find Browse SegmentPosters by Segment slug
 */
export function findBrowseSegmentPosters <TResult>(parameters: IFindBrowseSegmentPostersParameters): Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>> {
    return request<IFindBrowseSegmentPostersParameters, TResult>("/segments/posters", parameters, "GET");
}

export const SegmentPoster = {findBrowseSegmentPosters};
