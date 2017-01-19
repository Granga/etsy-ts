import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Find Browse SegmentPosters by Segment slug
 */
export function findBrowseSegmentPosters<TResult>(parameters: IFindBrowseSegmentPostersParameters): Bluebird<IStandardResponse<TResult, IFindBrowseSegmentPostersParameters>> {
    return request<IStandardResponse<TResult, IFindBrowseSegmentPostersParameters>>(parameters, '/segments/posters', 'GET');
}
