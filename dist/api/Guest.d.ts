/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IGuest {
    guest_id: any;
    checkout_url: string;
}
export interface IGetGuestParameters extends IStandardParameters {
    guest_id: any;
}
export interface IGenerateGuestParameters extends IStandardParameters {
}
export interface IClaimGuestParameters extends IStandardParameters {
    guest_id: any;
}
export interface IMergeGuestParameters extends IStandardParameters {
    guest_id: any;
    target_guest_id: any;
}
/**
* Get a guest by ID.
*/
export declare function getGuest<TResult>(parameters: IGetGuestParameters): Bluebird<IStandardResponse<TResult, IGetGuestParameters>>;
/**
* A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
*/
export declare function generateGuest<TResult>(parameters: IGenerateGuestParameters): Bluebird<IStandardResponse<TResult, IGenerateGuestParameters>>;
/**
* Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
*/
export declare function claimGuest<TResult>(parameters: IClaimGuestParameters): Bluebird<IStandardResponse<TResult, IClaimGuestParameters>>;
/**
* Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
*/
export declare function mergeGuest<TResult>(parameters: IMergeGuestParameters): Bluebird<IStandardResponse<TResult, IMergeGuestParameters>>;
