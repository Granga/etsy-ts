import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function uploadAvatar <TResult>(parameters: IUploadAvatarParameters): Promise<IStandardResponse<IUploadAvatarParameters, TResult>> {
    return request<IUploadAvatarParameters, TResult>("/users/:user_id/avatar", parameters, "POST");
}
/**
 * Get avatar image source
 */
export function getAvatarImgSrc <TResult>(parameters: IGetAvatarImgSrcParameters): Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>> {
    return request<IGetAvatarImgSrcParameters, TResult>("/users/:user_id/avatar/src", parameters, "GET");
}

export const Avatar = {uploadAvatar, getAvatarImgSrc};
