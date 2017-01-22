import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ISegment {
    name: string;
    path: string;
    short_name: string;
    has_children: boolean;
    image_url: string;
    shop_id: number;
    shop_name: number;
    listing_id: number;
}
export interface IFindBrowseSegmentsParameters extends IStandardParameters {
    region?: string;
    path?: string;
}
export declare class Segment {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Find all Browse Segments
     */
    findBrowseSegments<TResult>(parameters: IFindBrowseSegmentsParameters): Promise<IStandardResponse<IFindBrowseSegmentsParameters, TResult>>;
}
