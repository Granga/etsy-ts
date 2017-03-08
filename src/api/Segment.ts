import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function findBrowseSegments <TResult>(parameters: IFindBrowseSegmentsParameters): Promise<IStandardResponse<IFindBrowseSegmentsParameters, TResult>> {
    return request<IFindBrowseSegmentsParameters, TResult>("/segments", parameters, "GET");
}

export const Segment = {findBrowseSegments};
