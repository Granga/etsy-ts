import { AxiosRequestConfig } from "axios";
import OAuth from "oauth-1.0a";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { Entities } from "./Entities";
export interface IOptions {
    baseUrl?: string;
    json?: boolean;
    token?: OAuth.Token;
}
export declare class Etsy extends Entities {
    constructor(options: {
        apiKeys: ApiKeyDetails;
        axiosConfig?: AxiosRequestConfig;
    });
}
