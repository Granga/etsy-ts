import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findBrowseSegmentPosters<TResult>(parameters: IFindBrowseSegmentPostersParameters): Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>>;
export declare const SegmentPoster: {
    findBrowseSegmentPosters: <TResult>(parameters: IFindBrowseSegmentPostersParameters) => Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>>;
};
