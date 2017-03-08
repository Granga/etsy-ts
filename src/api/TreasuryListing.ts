import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITreasuryListing {
    data: any,
    creation_tsz: number
}

//parameters types
export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}
export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}

//methods
/**
 * Add listing to a Treasury
 */
function addTreasuryListing <TResult>(parameters: IAddTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>> {
    return request<IAddTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings", parameters, "POST", options);
}
/**
 * Remove listing from a Treasury
 */
function removeTreasuryListing <TResult>(parameters: IRemoveTreasuryListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>> {
    return request<IRemoveTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
}

export const TreasuryListing = {addTreasuryListing, removeTreasuryListing};
