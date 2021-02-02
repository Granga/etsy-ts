import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
import { Entities } from "./Entities";

export interface IOptions {
    baseUrl?: string,
    json?: boolean,
    token?: Token
}

export class Etsy extends Entities {
    constructor(
        options: {
            apiKeys: Token,
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
