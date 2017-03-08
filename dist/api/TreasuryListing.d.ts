import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>>;
/**
 * Remove listing from a Treasury
 */
export declare function removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>;
export declare const TreasuryListing: {
    addTreasuryListing: <TResult>(parameters: IAddTreasuryListingParameters) => Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>>;
    removeTreasuryListing: <TResult>(parameters: IRemoveTreasuryListingParameters) => Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>;
};
