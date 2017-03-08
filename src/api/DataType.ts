import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IDataType {
    type: string,
    values: string[]
}

//parameters types

export interface IDescribeOccasionEnumParameters extends IStandardParameters {

}
export interface IDescribeRecipientEnumParameters extends IStandardParameters {

}
export interface IDescribeWhenMadeEnumParameters extends IStandardParameters {
    include_formatted?: boolean
}
export interface IDescribeWhoMadeEnumParameters extends IStandardParameters {

}

//methods

/**
 * Describes the legal values for Listing.occasion.
 */
export function describeOccasionEnum <TResult>(parameters: IDescribeOccasionEnumParameters): Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>> {
    return request<IDescribeOccasionEnumParameters, TResult>("/types/enum/occasion", parameters, "GET");
}
/**
 * Describes the legal values for Listing.recipient.
 */
export function describeRecipientEnum <TResult>(parameters: IDescribeRecipientEnumParameters): Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>> {
    return request<IDescribeRecipientEnumParameters, TResult>("/types/enum/recipient", parameters, "GET");
}
/**
 * Describes the legal values for Listing.when_made.
 */
export function describeWhenMadeEnum <TResult>(parameters: IDescribeWhenMadeEnumParameters): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>> {
    return request<IDescribeWhenMadeEnumParameters, TResult>("/types/enum/when_made", parameters, "GET");
}
/**
 * Describes the legal values for Listing.who_made.
 */
export function describeWhoMadeEnum <TResult>(parameters: IDescribeWhoMadeEnumParameters): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>> {
    return request<IDescribeWhoMadeEnumParameters, TResult>("/types/enum/who_made", parameters, "GET");
}

export const DataType = {describeOccasionEnum, describeRecipientEnum, describeWhenMadeEnum, describeWhoMadeEnum};
