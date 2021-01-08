import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
import { Entities } from "./Entities";
export interface IOptions {
    baseUrl?: string;
    json?: boolean;
    token?: Token;
}
export declare class Etsy extends Entities {
    constructor(options: {
        apiKeys: Token;
        axiosConfig?: AxiosRequestConfig;
    });
}
