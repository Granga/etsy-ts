import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IAvatar {
    avatar_id: number;
    hex_code: string;
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    brightness: number;
    is_black_and_white: boolean;
    creation_tsz: number;
    user_id: number;
}
export interface IUploadAvatarParameters extends IStandardParameters {
    src?: string;
    user_id: string | number;
    image?: string;
}
export interface IGetAvatarImgSrcParameters extends IStandardParameters {
    user_id: string | number;
}
/**
 * Upload a new user avatar image
 */
export declare function uploadAvatar<TResult>(parameters: IUploadAvatarParameters): Promise<IStandardResponse<IUploadAvatarParameters, TResult>>;
/**
 * Get avatar image source
 */
export declare function getAvatarImgSrc<TResult>(parameters: IGetAvatarImgSrcParameters): Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>>;
export declare const Avatar: {
    uploadAvatar: <TResult>(parameters: IUploadAvatarParameters) => Promise<IStandardResponse<IUploadAvatarParameters, TResult>>;
    getAvatarImgSrc: <TResult>(parameters: IGetAvatarImgSrcParameters) => Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>>;
};
