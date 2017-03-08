import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const Avatar: {
    uploadAvatar: <TResult>(parameters: IUploadAvatarParameters, options?: IOptions) => Promise<IStandardResponse<IUploadAvatarParameters, TResult>>;
    getAvatarImgSrc: <TResult>(parameters: IGetAvatarImgSrcParameters, options?: IOptions) => Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>>;
};
