import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IGuest {
    /**
     * The ID that associates to the guest - a random 13-digit hash. Validated by the regular expression '/^[a-zA-Z0-9-_]+$/'. Each ID is identified internally to the Application that created it, meaning that other applications will not have access to this guest, even with the same ID.
     */
    guest_id: any,
    /**
     * The URL to send the user's browser to on checkout. This will allow them to use this guest ID to check out with the carts associated. Please note that a guest cart's data are undefined after being merged on checkout.
     */
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
function getGuest<TResult>(parameters: IGetGuestParameters, options?: IOptions): Promise<IStandardResponse<IGetGuestParameters, TResult>> {
    return request<IGetGuestParameters, TResult>("/guests/:guest_id", parameters, "GET", options);
}

/**
 * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
 */
function generateGuest<TResult>(parameters: IGenerateGuestParameters, options?: IOptions): Promise<IStandardResponse<IGenerateGuestParameters, TResult>> {
    return request<IGenerateGuestParameters, TResult>("/guests/generator", parameters, "GET", options);
}

/**
 * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
 */
function claimGuest<TResult>(parameters: IClaimGuestParameters, options?: IOptions): Promise<IStandardResponse<IClaimGuestParameters, TResult>> {
    return request<IClaimGuestParameters, TResult>("/guests/:guest_id/claim", parameters, "POST", options);
}

/**
 * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
 */
function mergeGuest<TResult>(parameters: IMergeGuestParameters, options?: IOptions): Promise<IStandardResponse<IMergeGuestParameters, TResult>> {
    return request<IMergeGuestParameters, TResult>("/guests/:guest_id/merge", parameters, "POST", options);
}

export const Guest = {getGuest, generateGuest, claimGuest, mergeGuest};
