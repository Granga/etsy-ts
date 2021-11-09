import { AxiosInstance, AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";
import { Token } from "oauth-1.0a";

export interface IOptions {
    apiKeys: Token,
    axiosConfig?: AxiosRequestConfig,
    axiosInstance?: AxiosInstance,
    bottleneck?: Bottleneck,
}
