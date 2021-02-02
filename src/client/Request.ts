import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { enc, HmacSHA1 } from "crypto-js";
import OAuth from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardResponse } from "../types/IStandardResponse";

export function request<TParameters, TResult>(
    axiosConfig: AxiosRequestConfig,
    params: TParameters,
    oauth?: IOAuthTokens,
): Promise<AxiosResponse<IStandardResponse<TParameters, TResult>>> {
    let finalConfig: AxiosRequestConfig = {
        ...axiosConfig
    };

    finalConfig.url = fillUriPlaceholders(axiosConfig.url as string, params);

    switch ((finalConfig.method as string).toUpperCase()) {
        case "GET":
        case "DELETE":
            if (Object.keys(params).length > 0) {
                let encodedParameters = encodePrameters(params);
                finalConfig.url += "?" + encodedParameters;
            }
            break;

        default:
            finalConfig.data = params;
    }

    let client = createClient(finalConfig, oauth);
    return client.request(finalConfig);
}

function createClient(
    axiosConfig: AxiosRequestConfig,
    tokens?: IOAuthTokens
) {
    let client = axios.create({
        baseURL: `https://openapi.etsy.com/v2`,
        ...axiosConfig,
    });

    client.interceptors.request.use((config: AxiosRequestConfig) => {
        if (tokens?.apiKeys && tokens?.token) {
            let requestData: OAuth.RequestOptions = {
                url: combineURLs(config.baseURL as string, config.url as string),
                method: config.method as string,
                //...(config.data ? {data: config.data} : undefined),
            };

            let authHeader = generateOAuthHeader(requestData, tokens);
            config.headers = {
                ...config.headers,
                ...authHeader,
            };
        }
        else if (tokens?.apiKeys) {
            config.params = {
                ...config.params,
                api_key: tokens.apiKeys.key
            }
        }

        return config;
    });

    client.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (error) {
                error.message = captureErrorMessage(error);
            }

            throw error;
        }
    );

    return client;
}

function captureErrorMessage(e: Error | AxiosError) {
    if (e["isAxiosError"] === true) {
        let error = e as AxiosError;
        if (error.response) {
            return error.response.data || e.toString();
        }
    }

    return e.toString();
}

function encodePrameters(parameters: any) {
    if (Object.keys(parameters).length > 0) {
        return Object.keys(parameters)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
            .join('&');
    }

    return "";
}

function combineURLs(baseURL: string, relativeURL: string) {
    return relativeURL
        ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
        : baseURL;
}

function fillUriPlaceholders(uri: string, parameters: any) {
    let keys = Object.keys(parameters).filter(key => uri.indexOf(`/:${key}`) > -1);
    keys.forEach(key => {
        uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
        delete parameters[key];
    });
    return uri;
}

function generateOAuthHeader(
    request_data: OAuth.RequestOptions,
    tokens: IOAuthTokens,
) {
    let oauth = new OAuth({
        consumer: {
            key: tokens.apiKeys.key,
            secret: tokens.apiKeys.secret,
        },
        signature_method: "HMAC-SHA1",
        hash_function: ((base_string, key) => HmacSHA1(base_string, key).toString(enc.Base64))
    });
    let authorized_data = oauth.authorize(request_data, tokens.token);
    return oauth.toHeader(authorized_data);
}
