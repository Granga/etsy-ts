/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters): Bluebird<IStandardResponse<TResult, IAddTreasuryListingParameters>>;
/**
* Remove listing from a Treasury
*/
export declare function removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters): Bluebird<IStandardResponse<TResult, IRemoveTreasuryListingParameters>>;
