/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
export declare function request<TResult>(parameters: any, url: string, method?: string, baseUrl?: string): Bluebird<TResult>;
