import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function addTreasuryListing <TResult>(parameters: IAddTreasuryListingParameters): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>> {
    return request<IAddTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings", parameters, "POST");
}
/**
 * Remove listing from a Treasury
 */
export function removeTreasuryListing <TResult>(parameters: IRemoveTreasuryListingParameters): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>> {
    return request<IRemoveTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE");
}

export const TreasuryListing = {addTreasuryListing, removeTreasuryListing};
