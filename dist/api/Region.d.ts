import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IRegion {
    region_id: number;
    region_name: string;
    is_dead: boolean;
}
export interface IFindAllRegionParameters extends IStandardParameters {
}
export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[];
}
export interface IFindEligibleRegionsParameters extends IStandardParameters {
}
export declare const Region: {
    findAllRegion: <TResult>(parameters: IFindAllRegionParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
    getRegion: <TResult>(parameters: IGetRegionParameters, options?: IOptions) => Promise<IStandardResponse<IGetRegionParameters, TResult>>;
    findEligibleRegions: <TResult>(parameters: IFindEligibleRegionsParameters, options?: IOptions) => Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
};
