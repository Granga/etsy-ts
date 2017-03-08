import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IAvatar {
    avatar_id: number,
    hex_code: string,
    red: number,
    green: number,
    blue: number,
    hue: number,
    saturation: number,
    brightness: number,
    is_black_and_white: boolean,
    creation_tsz: number,
    user_id: number
}

//parameters types
export interface IUploadAvatarParameters extends IStandardParameters {
    src?: string,
    user_id: string | number,
    image?: string
}
export interface IGetAvatarImgSrcParameters extends IStandardParameters {
    user_id: string | number
}

//methods
/**
 * Upload a new user avatar image
 */
function uploadAvatar <TResult>(parameters: IUploadAvatarParameters, options?: IOptions): Promise<IStandardResponse<IUploadAvatarParameters, TResult>> {
    return request<IUploadAvatarParameters, TResult>("/users/:user_id/avatar", parameters, "POST", options);
}
/**
 * Get avatar image source
 */
function getAvatarImgSrc <TResult>(parameters: IGetAvatarImgSrcParameters, options?: IOptions): Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>> {
    return request<IGetAvatarImgSrcParameters, TResult>("/users/:user_id/avatar/src", parameters, "GET", options);
}

export const Avatar = {uploadAvatar, getAvatarImgSrc};
