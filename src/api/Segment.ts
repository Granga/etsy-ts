import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ISegment {
    name: string,
    path: string,
    short_name: string,
    has_children: boolean,
    image_url: string,
    shop_id: number,
    shop_name: number,
    listing_id: number
}

export interface IFindBrowseSegmentsParameters extends IStandardParameters {
    region?: string,
    path?: string
}

/**
 * Find all Browse Segments
 */
export function findBrowseSegments<TResult>(parameters: IFindBrowseSegmentsParameters): Bluebird<IStandardResponse<TResult, IFindBrowseSegmentsParameters>> {
    return request<IStandardResponse<TResult, IFindBrowseSegmentsParameters>>(parameters, '/segments', 'GET');
}
