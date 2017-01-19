import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

export interface IUploadAvatarParameters extends IStandardParameters {
    src?: string,
    user_id: string | number,
    image?: string
}
export interface IGetAvatarImgSrcParameters extends IStandardParameters {
    user_id: string | number
}

/**
 * Upload a new user avatar image
 */
export function uploadAvatar<TResult>(parameters: IUploadAvatarParameters): Bluebird<IStandardResponse<TResult, IUploadAvatarParameters>> {
    return request<IStandardResponse<TResult, IUploadAvatarParameters>>(parameters, '/users/:user_id/avatar', 'POST');
}
/**
 * Get avatar image source
 */
export function getAvatarImgSrc<TResult>(parameters: IGetAvatarImgSrcParameters): Bluebird<IStandardResponse<TResult, IGetAvatarImgSrcParameters>> {
    return request<IStandardResponse<TResult, IGetAvatarImgSrcParameters>>(parameters, '/users/:user_id/avatar/src', 'GET');
}
