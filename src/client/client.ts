import axios, { Method } from "axios";
import { IStandardResponse } from "./IStandardResponse";

export interface IOptions {
    baseUrl?: string,
    json?: boolean
}

const defaultOptions = {
    baseUrl: "https://www.etsy.com/api/v2/ajax",
    json: true
};

export async function request<TParameters, TResult>(uri: string, parameters: TParameters, method: Method, options?: IOptions): Promise<IStandardResponse<TParameters, TResult>> {
    options = {...defaultOptions, ...options};
    let url = options.baseUrl + fillUriPlaceholders(uri, parameters);
    let body;

    switch (method.toUpperCase()) {
        case "GET":
        case "DELETE":
            if (Object.keys(parameters).length > 0) {
                let encodedParameters = encodePrameters(parameters);
                url += "?" + encodedParameters;
            }
            break;

        default:
            body = JSON.stringify(parameters);
    }

    let response = (await axios({
        method: method,
        url: url,
        data: body
    }));

    if (response.status >= 200 && response.status < 300) {
        return response.data as Promise<IStandardResponse<TParameters, TResult>>;
    }
    else {
        throw response.statusText;
    }
}

function fillUriPlaceholders(uri: string, parameters: any) {
    let keys = Object.keys(parameters).filter(key => uri.indexOf(`/:${key}`) > -1);
    keys.forEach(key => {
        uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
        delete parameters[key];
    });
    return uri;
}

function encodePrameters(parameters: any) {
    if (Object.keys(parameters).length > 0) {
        return Object.keys(parameters)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
            .join('&');
    }

    return "";
}
