/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IDataType {
    type: string;
    values: string[];
}
export interface IDescribeOccasionEnumParameters extends IStandardParameters {
}
export interface IDescribeRecipientEnumParameters extends IStandardParameters {
}
export interface IDescribeWhenMadeEnumParameters extends IStandardParameters {
    include_formatted?: boolean;
}
export interface IDescribeWhoMadeEnumParameters extends IStandardParameters {
}
/**
* Describes the legal values for Listing.occasion.
*/
export declare function describeOccasionEnum<TResult>(parameters: IDescribeOccasionEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeOccasionEnumParameters>>;
/**
* Describes the legal values for Listing.recipient.
*/
export declare function describeRecipientEnum<TResult>(parameters: IDescribeRecipientEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeRecipientEnumParameters>>;
/**
* Describes the legal values for Listing.when_made.
*/
export declare function describeWhenMadeEnum<TResult>(parameters: IDescribeWhenMadeEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeWhenMadeEnumParameters>>;
/**
* Describes the legal values for Listing.who_made.
*/
export declare function describeWhoMadeEnum<TResult>(parameters: IDescribeWhoMadeEnumParameters): Bluebird<IStandardResponse<TResult, IDescribeWhoMadeEnumParameters>>;
