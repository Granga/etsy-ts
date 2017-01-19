/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function findBrowseSegmentPosters<TResult>(parameters: IFindBrowseSegmentPostersParameters): Bluebird<IStandardResponse<TResult, IFindBrowseSegmentPostersParameters>>;
