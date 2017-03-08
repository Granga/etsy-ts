import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types
export interface IFindBrowseSegmentsParameters extends IStandardParameters {
    region?: string,
    path?: string
}

//methods
/**
 * Find all Browse Segments
 */
function findBrowseSegments <TResult>(parameters: IFindBrowseSegmentsParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentsParameters, TResult>> {
    return request<IFindBrowseSegmentsParameters, TResult>("/segments", parameters, "GET", options);
}

export const Segment = {findBrowseSegments};
