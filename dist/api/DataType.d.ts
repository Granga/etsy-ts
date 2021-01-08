import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IDataType {
    /**
     * Base type of data
     */
    type: string;
    /**
     * Allowable values (for an enum.)
     */
    values: string[];
}
export interface IDescribeOccasionEnumParameters {
}
export interface IDescribeRecipientEnumParameters {
}
export interface IDescribeWhenMadeEnumParameters {
    include_formatted?: boolean;
}
export interface IDescribeWhoMadeEnumParameters {
}
export declare class DataType {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Describes the legal values for Listing.occasion.
     */
    describeOccasionEnum<TResult>(params: IDescribeOccasionEnumParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>>;
    /**
     * Describes the legal values for Listing.recipient.
     */
    describeRecipientEnum<TResult>(params: IDescribeRecipientEnumParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>>;
    /**
     * Describes the legal values for Listing.when_made.
     */
    describeWhenMadeEnum<TResult>(params: IDescribeWhenMadeEnumParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>>;
    /**
     * Describes the legal values for Listing.who_made.
     */
    describeWhoMadeEnum<TResult>(params: IDescribeWhoMadeEnumParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>>;
}
