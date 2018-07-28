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
/**
 * Add listing to a Treasury
 */
declare function addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>>;
/**
 * Remove listing from a Treasury
 */
declare function removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>;
export declare const TreasuryListing: {
    addTreasuryListing: typeof addTreasuryListing;
    removeTreasuryListing: typeof removeTreasuryListing;
};
export {};
