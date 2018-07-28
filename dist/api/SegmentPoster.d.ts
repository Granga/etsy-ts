import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ISegmentPoster {
    name: string;
    path: string;
    image_url: string;
    shop_id: number;
    shop_name: number;
    weight: number;
    listing_id: number;
}
export interface IFindBrowseSegmentPostersParameters extends IStandardParameters {
    path?: string;
}
/**
 * Find Browse SegmentPosters by Segment slug
 */
declare function findBrowseSegmentPosters<TResult>(parameters: IFindBrowseSegmentPostersParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>>;
export declare const SegmentPoster: {
    findBrowseSegmentPosters: typeof findBrowseSegmentPosters;
};
export {};
