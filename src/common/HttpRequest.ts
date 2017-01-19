import * as rp from "request-promise";
import * as Bluebird from "bluebird";

export function request<TResult>(parameters: any, url: string, method: string = "GET", baseUrl: string = "https://etsy.com/api/v2/ajax"): Bluebird<TResult> {
    method = method.toUpperCase();
    let rpOptions: rp.Options = {
        method,
        url,
        baseUrl,
        json: true
    };

    if (method === "GET" || method === "DELETE") {
        rpOptions.qs = parameters;
    }
    else if (method === "POST" || method === "PATCH" || method === "PUT") {
        rpOptions.body = parameters;
    }

    return rp(rpOptions).promise();
}