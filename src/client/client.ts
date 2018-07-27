import {IStandardResponse} from "./IStandardResponse";

export interface IOptions {
    baseUrl?: string,
    json?: boolean
}

const defaultOptions = {
    baseUrl: "https://www.etsy.com/api/v2/ajax",
    json: true
};

export async function request<TParameters, TResult>(uri: string, parameters: TParameters, method: string, options?: IOptions): Promise<IStandardResponse<TParameters, TResult>> {
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

    let response = await fetch(url, {method, body});

    if (response.ok == true) {
        return response.json() as Promise<IStandardResponse<TParameters, TResult>>;
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

function encodePrameters(parameters) {
    if (Object.keys(parameters).length > 0) {
        Object.keys(parameters)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
            .join('&');
    }

    return "";
}
