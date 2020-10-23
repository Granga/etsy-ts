import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ITreasuryListing {
    /**
     * The detailed fields of the listing
     */
    data: any;
    /**
     * Time the listing was added to this Treasury, in epoch seconds
     */
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
export declare class TreasuryListing {
    /**
     * Add listing to a Treasury
     */
    static addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>>;
    /**
     * Remove listing from a Treasury
     */
    static removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>;
}
