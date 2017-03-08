import {IStandardResponse} from "./IStandardResponse";

export interface IOptions {
    baseUrl: string
}

const defaultOptions = {
    baseUrl: "https://etsy.com/api/v2/ajax",
    json: true
};

export async function request <TParameters, TResult>(uri: string, parameters: TParameters, method: string, options?: IOptions): Promise<IStandardResponse<TParameters, TResult>> {
    options = {... defaultOptions, ... options};
    let url = options.baseUrl + uri;
    let body;

    switch (method.toUpperCase()) {
        case "GET":
        case "DELETE":
            let encodedParameters = Object.keys(parameters)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                .join('&');
            url += "?" + encodedParameters;
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

