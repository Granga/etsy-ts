import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
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
/**
 * Find all Browse Segments
 */
declare function findBrowseSegments<TResult>(parameters: IFindBrowseSegmentsParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentsParameters, TResult>>;
export declare const Segment: {
    findBrowseSegments: typeof findBrowseSegments;
};
export {};
