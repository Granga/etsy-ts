import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function describeOccasionEnum<TResult>(parameters: IDescribeOccasionEnumParameters): Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.recipient.
 */
export declare function describeRecipientEnum<TResult>(parameters: IDescribeRecipientEnumParameters): Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.when_made.
 */
export declare function describeWhenMadeEnum<TResult>(parameters: IDescribeWhenMadeEnumParameters): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.who_made.
 */
export declare function describeWhoMadeEnum<TResult>(parameters: IDescribeWhoMadeEnumParameters): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>;
export declare const DataType: {
    describeOccasionEnum: <TResult>(parameters: IDescribeOccasionEnumParameters) => Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>;
    describeRecipientEnum: <TResult>(parameters: IDescribeRecipientEnumParameters) => Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>;
    describeWhenMadeEnum: <TResult>(parameters: IDescribeWhenMadeEnumParameters) => Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>;
    describeWhoMadeEnum: <TResult>(parameters: IDescribeWhoMadeEnumParameters) => Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>;
};
