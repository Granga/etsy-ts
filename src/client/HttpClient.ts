import {IStandardResponse} from "./IStandardResponse";
import nodeFetch from "node-fetch";

export interface IHttpClientOptions {
    baseUrl: string
}

export class HttpClient {
    constructor(protected options: IHttpClientOptions) {
        const defaultOptions = {
            baseUrl: "https://etsy.com/api/v2/ajax",
            json: true
        };

        this.options = {options, ...defaultOptions};
    }

    async http<TParameters, TResult>(url: string, parameters: TParameters, method: string = "GET"): Promise<IStandardResponse<TParameters, TResult>> {
        method = method.toUpperCase();
        url = this.options.baseUrl + url;

        let body;

        if (method === "GET" || method === "DELETE") {
            url += "?" + Object.keys(parameters)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                    .join('&');
        }
        else if (method === "POST" || method === "PATCH" || method === "PUT") {
            body = JSON.stringify(parameters);
        }

        let fetch;
        if (window && window["fetch"]) {
            fetch = window["fetch"];
        }
        else {
            fetch = nodeFetch;
        }

        let response = await fetch(url, {method, body});
        console.log(response);

        if (response.ok == true) {
            return response.json() as Promise<IStandardResponse<TParameters, TResult>>;
        }
        else {
            throw response.statusText;
        }
    }
}
