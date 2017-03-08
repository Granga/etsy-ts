import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ITreasuryListing {
    data: any;
    creation_tsz: number;
}
export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}
export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}
export declare const TreasuryListing: {
    addTreasuryListing: <TResult>(parameters: IAddTreasuryListingParameters, options?: IOptions) => Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>>;
    removeTreasuryListing: <TResult>(parameters: IRemoveTreasuryListingParameters, options?: IOptions) => Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>;
};
