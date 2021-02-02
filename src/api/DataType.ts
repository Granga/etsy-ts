import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IDataType {
    /**
     * Base type of data
     */
    type: string,
    /**
     * Allowable values (for an enum.)
     */
    values: string[]
}

//parameters types
export interface IDescribeOccasionEnumParameters {

}

export interface IDescribeRecipientEnumParameters {

}

export interface IDescribeWhenMadeEnumParameters {
    include_formatted?: boolean
}

export interface IDescribeWhoMadeEnumParameters {

}

//methods class
export class DataType {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Describes the legal values for Listing.occasion.
     */
    async describeOccasionEnum<TResult>(
        params: IDescribeOccasionEnumParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>> {
        return request<IDescribeOccasionEnumParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/types/enum/occasion",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Describes the legal values for Listing.recipient.
     */
    async describeRecipientEnum<TResult>(
        params: IDescribeRecipientEnumParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>> {
        return request<IDescribeRecipientEnumParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/types/enum/recipient",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Describes the legal values for Listing.when_made.
     */
    async describeWhenMadeEnum<TResult>(
        params: IDescribeWhenMadeEnumParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>> {
        return request<IDescribeWhenMadeEnumParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/types/enum/when_made",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Describes the legal values for Listing.who_made.
     */
    async describeWhoMadeEnum<TResult>(
        params: IDescribeWhoMadeEnumParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>> {
        return request<IDescribeWhoMadeEnumParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/types/enum/who_made",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
