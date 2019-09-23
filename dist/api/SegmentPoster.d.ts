import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ISegmentPoster {
    /**
     * The formatted name for this SegmentPoster
     */
    name: string;
    /**
     * The sequence of slugified names leading to a Segment represented by this SegmentPoster
     */
    path: string;
    /**
     * A fullxfull image representing this SegmentPoster's content
     */
    image_url: string;
    /**
     * (Optional) The id of the Shop from which the image_url was chosen
     */
    shop_id: number;
    /**
     * (Optional) The name of the Shop from which the image_url was chosen
     */
    shop_name: number;
    /**
     * A number starting at 1 representing how prominent this SegmentPoster is relative to other SegmentPosters
     */
    weight: number;
    /**
     * (Optional) The id of the listing from which the image_url was chosen.
     */
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
