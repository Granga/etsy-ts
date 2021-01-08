import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardResponse } from "../types/IStandardResponse";
export declare function request<TParameters, TResult>(axiosConfig: AxiosRequestConfig, params: TParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<TParameters, TResult>>>;
