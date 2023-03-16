import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IAvatar {
    /**
     * The numeric ID for this avatar image.
     */
    avatar_id: number,
    /**
     * The avatar' average RGB color, in webhex notation.
     */
    hex_code: string,
    /**
     * The avatar's average red channel (RGB color) value from 0-255.
     */
    red: number,
    /**
     * The avatar's average green channel (RGB color) value from 0-255.
     */
    green: number,
    /**
     * The avatar's average blue channel (RGB color) value from 0-255.
     */
    blue: number,
    /**
     * The avatar's average hue (HSV color) from 0-360.
     */
    hue: number,
    /**
     * The avatar's average saturation (HSV color) from 0-100.
     */
    saturation: number,
    /**
     * The avatar's average brightness (HSV color) from 0-100.
     */
    brightness: number,
    /**
     * True if the avatar is a black and white image.
     */
    is_black_and_white: boolean,
    /**
     * The time that the avatar was uploaded.
     */
    creation_tsz: number,
    /**
     * The numeric ID of the user who owns the avatar.
     */
    user_id: number
}

//parameters types
export interface IUploadAvatarParameters {
    src?: string,
    user_id: string | number,
    image?: string
}

export interface IGetAvatarImgSrcParameters {
    user_id: string | number
}

//methods class
export class Avatar extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Upload a new user avatar image
     */
    async uploadAvatar<TResult>(
        params: IUploadAvatarParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUploadAvatarParameters, TResult>>> {
        return this.request<IUploadAvatarParameters, TResult>("POST", "/users/:user_id/avatar", params, extra);
    }

    /**
     * Get avatar image source
     */
    async getAvatarImgSrc<TResult>(
        params: IGetAvatarImgSrcParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetAvatarImgSrcParameters, TResult>>> {
        return this.request<IGetAvatarImgSrcParameters, TResult>("GET", "/users/:user_id/avatar/src", params, extra);
    }
}
