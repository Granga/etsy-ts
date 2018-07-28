import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function getGuest<TResult>(parameters: IGetGuestParameters, options?: IOptions): Promise<IStandardResponse<IGetGuestParameters, TResult>>;
/**
 * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
 */
declare function generateGuest<TResult>(parameters: IGenerateGuestParameters, options?: IOptions): Promise<IStandardResponse<IGenerateGuestParameters, TResult>>;
/**
 * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
 */
declare function claimGuest<TResult>(parameters: IClaimGuestParameters, options?: IOptions): Promise<IStandardResponse<IClaimGuestParameters, TResult>>;
/**
 * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
 */
declare function mergeGuest<TResult>(parameters: IMergeGuestParameters, options?: IOptions): Promise<IStandardResponse<IMergeGuestParameters, TResult>>;
export declare const Guest: {
    getGuest: typeof getGuest;
    generateGuest: typeof generateGuest;
    claimGuest: typeof claimGuest;
    mergeGuest: typeof mergeGuest;
};
export {};
