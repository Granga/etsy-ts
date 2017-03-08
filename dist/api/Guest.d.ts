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
export declare const Guest: {
    getGuest: <TResult>(parameters: IGetGuestParameters, options?: IOptions) => Promise<IStandardResponse<IGetGuestParameters, TResult>>;
    generateGuest: <TResult>(parameters: IGenerateGuestParameters, options?: IOptions) => Promise<IStandardResponse<IGenerateGuestParameters, TResult>>;
    claimGuest: <TResult>(parameters: IClaimGuestParameters, options?: IOptions) => Promise<IStandardResponse<IClaimGuestParameters, TResult>>;
    mergeGuest: <TResult>(parameters: IMergeGuestParameters, options?: IOptions) => Promise<IStandardResponse<IMergeGuestParameters, TResult>>;
};
