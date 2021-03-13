import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import OAuth from "oauth-1.0a";
import { IOAuthTokens, IStandardResponse } from "../types";

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
            finalConfig.params = params;
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
            config.headers = {
                ...config.headers,
                ...generateOAuthHeader({
                    url: `${config.baseURL}${config.url}`,
                    method: config.method.toUpperCase()
                }, tokens),
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
        signature_method: "PLAINTEXT"
    });
    let authorized_data = oauth.authorize(request_data, tokens.token);
    return oauth.toHeader(authorized_data);
}
