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
export declare const SegmentPoster: {
    findBrowseSegmentPosters: <TResult>(parameters: IFindBrowseSegmentPostersParameters, options?: IOptions) => Promise<IStandardResponse<IFindBrowseSegmentPostersParameters, TResult>>;
};
