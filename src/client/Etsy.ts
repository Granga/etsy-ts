import { AxiosRequestConfig, } from "axios";
import OAuth from "oauth-1.0a";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { Entities } from "./Entities";

export interface IOptions {
    baseUrl?: string,
    json?: boolean,
    token?: OAuth.Token
}

export class Etsy extends Entities {
    constructor(
        options: {
            apiKeys: ApiKeyDetails,
            axiosConfig?: AxiosRequestConfig
        }
    ) {
        options.axiosConfig = {
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
            ...options.axiosConfig,
        };
        super(options.axiosConfig, options.apiKeys);
    }
}
