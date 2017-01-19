import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IDataType {
    type: string,
    values: string[]
}

export interface IDescribeOccasionEnumParameters extends IStandardParameters {

}
export interface IDescribeRecipientEnumParameters extends IStandardParameters {

}
export interface IDescribeWhenMadeEnumParameters extends IStandardParameters {
    include_formatted?: boolean
}
export interface IDescribeWhoMadeEnumParameters extends IStandardParameters {

}

/**
 * Describes the legal values for Listing.occasion.
 */
export function describeOccasionEnum<TResult>(parameters: IDescribeOccasionEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeOccasionEnumParameters>> {
    return request<IStandardResponse<TResult, IDescribeOccasionEnumParameters>>(parameters, '/types/enum/occasion', 'GET');
}
/**
 * Describes the legal values for Listing.recipient.
 */
export function describeRecipientEnum<TResult>(parameters: IDescribeRecipientEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeRecipientEnumParameters>> {
    return request<IStandardResponse<TResult, IDescribeRecipientEnumParameters>>(parameters, '/types/enum/recipient', 'GET');
}
/**
 * Describes the legal values for Listing.when_made.
 */
export function describeWhenMadeEnum<TResult>(parameters: IDescribeWhenMadeEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeWhenMadeEnumParameters>> {
    return request<IStandardResponse<TResult, IDescribeWhenMadeEnumParameters>>(parameters, '/types/enum/when_made', 'GET');
}
/**
 * Describes the legal values for Listing.who_made.
 */
export function describeWhoMadeEnum<TResult>(parameters: IDescribeWhoMadeEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeWhoMadeEnumParameters>> {
    return request<IStandardResponse<TResult, IDescribeWhoMadeEnumParameters>>(parameters, '/types/enum/who_made', 'GET');
}
