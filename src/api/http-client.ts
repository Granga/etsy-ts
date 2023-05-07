import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import FormData from "form-data";
import { SecurityDataFilter } from "../types/SecurityDataFilter";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
  /** Etsy user id will be passed to the SecurityDataStorage functions */
  etsyUserId?: number;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (params: SecurityDataFilter) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient {
  public instance: AxiosInstance;
  private securityWorker?: ApiConfig["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({securityWorker, secure, format, ...axiosConfig}: ApiConfig) {
    this.instance = axios.create({...axiosConfig, baseURL: axiosConfig.baseURL || "https://openapi.etsy.com"});
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    const formData = new FormData();

    for (const key of Object.keys(input || {})) {
      const value = input[key];

      if (value instanceof Array) {
        formData.append(key, JSON.stringify(value));
      }
      else if (typeof value === "boolean") {
        formData.append(key, value ? "true" : "false");
      }
      else {
        formData.append(key, value);
      }
    }

    return formData;
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    etsyUserId,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker({etsyUserId}))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(body instanceof FormData ? body.getHeaders() : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
