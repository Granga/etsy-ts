import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import OAuth from "oauth-1.0a";
import { IOAuthTokens, IOptions, IRequestOptions, IStandardResponse } from "../types";

export class ApiRequest {
    constructor(
        private readonly options: IOptions
    ) {
    }

    private readonly defaultAxiosConfig: AxiosRequestConfig = {
        baseURL: `https://openapi.etsy.com/v2`,
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
    };

    protected async request<TParameters, TResult>(
        method: Method,
        url: string,
        params: TParameters,
        etsyRequestOptions: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<TParameters, TResult>>> {
        let client = this.options?.axiosInstance || this.createClient();

        let axiosRequestConfig: AxiosRequestConfig = {
            ...this.defaultAxiosConfig,
            method,
            url,
            ...this.options?.axiosConfig,
            ...etsyRequestOptions?.axiosConfig
        };

        switch ((axiosRequestConfig.method as string).toUpperCase()) {
            case "GET":
            case "DELETE":
                axiosRequestConfig.params = params;
                break;

            default:
                axiosRequestConfig.data = params;
        }
        this.addAuthConfig(etsyRequestOptions, axiosRequestConfig);

        return this.options?.bottleneck
            ? this.options.bottleneck.schedule(async () => client.request(axiosRequestConfig))
            : client.request(axiosRequestConfig);
    }

    private createClient() {
        let client = axios.create();

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

    private addAuthConfig(etsyReqOptions: IRequestOptions, axiosRequestConfig: AxiosRequestConfig) {
        let oauth: IOAuthTokens = {
            apiKeys: etsyReqOptions?.apiKeys || this.options.apiKeys,
            token: etsyReqOptions?.token
        };

        if (oauth?.apiKeys && oauth?.token) {
            axiosRequestConfig.headers = {
                ...axiosRequestConfig.headers,
                ...this.generateOAuthHeader({
                    url: `${axiosRequestConfig.baseURL}${axiosRequestConfig.url}`,
                    method: axiosRequestConfig.method.toUpperCase()
                }, oauth),
            };
        }
        else if (oauth?.apiKeys) {
            axiosRequestConfig.params = {
                ...axiosRequestConfig.params,
                api_key: oauth.apiKeys.key
            }
        }
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
