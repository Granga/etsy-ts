import { AxiosRequestConfig } from "axios";
import { IOAuthTokens } from "./IOAuthTokens";

export interface IRequestOptions extends IOAuthTokens {
    axiosConfig?: AxiosRequestConfig
}
