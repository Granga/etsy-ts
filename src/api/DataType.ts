import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
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
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Describes the legal values for Listing.occasion.
     */
    async describeOccasionEnum<TResult>(
        params: IDescribeOccasionEnumParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>> {
        return request<IDescribeOccasionEnumParameters, TResult>({
            ...this.config,
            url: "/types/enum/occasion",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Describes the legal values for Listing.recipient.
     */
    async describeRecipientEnum<TResult>(
        params: IDescribeRecipientEnumParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>> {
        return request<IDescribeRecipientEnumParameters, TResult>({
            ...this.config,
            url: "/types/enum/recipient",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Describes the legal values for Listing.when_made.
     */
    async describeWhenMadeEnum<TResult>(
        params: IDescribeWhenMadeEnumParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>> {
        return request<IDescribeWhenMadeEnumParameters, TResult>({
            ...this.config,
            url: "/types/enum/when_made",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Describes the legal values for Listing.who_made.
     */
    async describeWhoMadeEnum<TResult>(
        params: IDescribeWhoMadeEnumParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>> {
        return request<IDescribeWhoMadeEnumParameters, TResult>({
            ...this.config,
            url: "/types/enum/who_made",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
