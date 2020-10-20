import { Method } from "axios";
import { IStandardResponse } from "./IStandardResponse";
export interface IOptions {
    baseUrl?: string;
    json?: boolean;
}
export declare function request<TParameters, TResult>(uri: string, parameters: TParameters, method: Method, options?: IOptions): Promise<IStandardResponse<TParameters, TResult>>;
