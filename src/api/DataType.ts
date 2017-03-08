import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function describeOccasionEnum <TResult>(parameters: IDescribeOccasionEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>> {
    return request<IDescribeOccasionEnumParameters, TResult>("/types/enum/occasion", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.recipient.
 */
function describeRecipientEnum <TResult>(parameters: IDescribeRecipientEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>> {
    return request<IDescribeRecipientEnumParameters, TResult>("/types/enum/recipient", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.when_made.
 */
function describeWhenMadeEnum <TResult>(parameters: IDescribeWhenMadeEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>> {
    return request<IDescribeWhenMadeEnumParameters, TResult>("/types/enum/when_made", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.who_made.
 */
function describeWhoMadeEnum <TResult>(parameters: IDescribeWhoMadeEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>> {
    return request<IDescribeWhoMadeEnumParameters, TResult>("/types/enum/who_made", parameters, "GET", options);
}

export const DataType = {describeOccasionEnum, describeRecipientEnum, describeWhenMadeEnum, describeWhoMadeEnum};
