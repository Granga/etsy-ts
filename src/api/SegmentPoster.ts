import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function findBrowseSegmentPosters <TResult>(parameters: IFindBrowseSegmentPostersParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>> {
    return request<IFindBrowseSegmentPostersParameters, TResult>("/segments/posters", parameters, "GET", options);
}

export const SegmentPoster = {findBrowseSegmentPosters};
