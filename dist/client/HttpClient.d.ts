import { IStandardResponse } from "./IStandardResponse";
export interface IHttpClientOptions {
    baseUrl: string;
}
export declare class HttpClient {
    protected options: IHttpClientOptions;
    constructor(options: IHttpClientOptions);
    http<TParameters, TResult>(url: string, parameters: TParameters, method?: string): Promise<IStandardResponse<TParameters, TResult>>;
}
