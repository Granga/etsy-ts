import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IGuest {
    guest_id: any,
    checkout_url: string
}

//parameters types

export interface IGetGuestParameters extends IStandardParameters {
    guest_id: any
}
export interface IGenerateGuestParameters extends IStandardParameters {

}
export interface IClaimGuestParameters extends IStandardParameters {
    guest_id: any
}
export interface IMergeGuestParameters extends IStandardParameters {
    guest_id: any,
    target_guest_id: any
}

//methods

/**
 * Get a guest by ID.
 */
export function getGuest <TResult>(parameters: IGetGuestParameters): Promise<IStandardResponse<IGetGuestParameters, TResult>> {
    return request<IGetGuestParameters, TResult>("/guests/:guest_id", parameters, "GET");
}
/**
 * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
 */
export function generateGuest <TResult>(parameters: IGenerateGuestParameters): Promise<IStandardResponse<IGenerateGuestParameters, TResult>> {
    return request<IGenerateGuestParameters, TResult>("/guests/generator", parameters, "GET");
}
/**
 * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
 */
export function claimGuest <TResult>(parameters: IClaimGuestParameters): Promise<IStandardResponse<IClaimGuestParameters, TResult>> {
    return request<IClaimGuestParameters, TResult>("/guests/:guest_id/claim", parameters, "POST");
}
/**
 * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
 */
export function mergeGuest <TResult>(parameters: IMergeGuestParameters): Promise<IStandardResponse<IMergeGuestParameters, TResult>> {
    return request<IMergeGuestParameters, TResult>("/guests/:guest_id/merge", parameters, "POST");
}

export const Guest = {getGuest, generateGuest, claimGuest, mergeGuest};
