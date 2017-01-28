import {IStandardResponse} from "./IStandardResponse";

export interface IHttpClientOptions {
    baseUrl: string
}

export class HttpClient {
    constructor(private fetch: any, private options?: IHttpClientOptions) {
        const defaultOptions = {
            baseUrl: "https://etsy.com/api/v2/ajax",
            json: true
        };

        //todo: code for authentication

        this.options = {...defaultOptions, ...options};
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


        let response = await this.fetch(url, {method, body});
        console.log(response);

        if (response.ok == true) {
            return response.json() as Promise<IStandardResponse<TParameters, TResult>>;
        }
        else {
            throw response.statusText;
        }
    }
}
