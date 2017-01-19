import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ITreasuryListing {
    data: any,
    creation_tsz: number
}

export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}
export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}

/**
 * Add listing to a Treasury
 */
export function addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters): Bluebird<IStandardResponse<TResult, IAddTreasuryListingParameters>> {
    return request<IStandardResponse<TResult, IAddTreasuryListingParameters>>(parameters, '/treasuries/:treasury_key/listings', 'POST');
}
/**
 * Remove listing from a Treasury
 */
export function removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters): Bluebird<IStandardResponse<TResult, IRemoveTreasuryListingParameters>> {
    return request<IStandardResponse<TResult, IRemoveTreasuryListingParameters>>(parameters, '/treasuries/:treasury_key/listings/:listing_id', 'DELETE');
}
