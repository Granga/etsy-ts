import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import OAuth from "oauth-1.0a";
import { IOAuthTokens, IOptions, IRequestOptions, IStandardResponse } from "../types";

export class ApiRequest {
    constructor(
        private readonly options: IOptions
    ) {
    }

    protected async request<TParameters, TResult>(
        method: Method,
        url: string,
        params: TParameters,
        extra: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<TParameters, TResult>>> {
        let finalConfig: AxiosRequestConfig = {
            paramsSerializer: (params) => {
                let searchParams = new URLSearchParams();
                Object.keys(params).forEach(paramName => {
                    let paramValue = params[paramName];
                    Array.isArray(paramValue)
                        ? searchParams.append(paramName, paramValue.join(","))
                        : searchParams.append(paramName, paramValue);
                });

                return searchParams.toString();
            },
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
            url,
            method,
            ...this.options?.axiosConfig,
            ...extra?.axiosConfig
        };
        let oauth: IOAuthTokens = {
            apiKeys: extra?.apiKeys || this.options.apiKeys,
            token: extra?.token
        };

        switch ((finalConfig.method as string).toUpperCase()) {
            case "GET":
            case "DELETE":
                finalConfig.params = params;
                break;

            default:
                finalConfig.data = params;
        }

        let client = this.createClient(finalConfig, oauth);

        return this.options?.bottleneck
            ? this.options.bottleneck.schedule(async () => client.request(finalConfig))
            : client.request(finalConfig);
    }

    private createClient(
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
                    ...this.generateOAuthHeader({
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
                    error.message = this.captureErrorMessage(error);
                }

                throw error;
            }
        );

        return client;
    }

    private captureErrorMessage(e: Error | AxiosError) {
        if (e["isAxiosError"] === true) {
            let error = e as AxiosError;
            if (error.response) {
                return error.response.data || e.toString();
            }
        }

        return e.toString();
    }

    private generateOAuthHeader(
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
}
