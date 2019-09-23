import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function describeOccasionEnum<TResult>(parameters: IDescribeOccasionEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.recipient.
 */
declare function describeRecipientEnum<TResult>(parameters: IDescribeRecipientEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.when_made.
 */
declare function describeWhenMadeEnum<TResult>(parameters: IDescribeWhenMadeEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>;
/**
 * Describes the legal values for Listing.who_made.
 */
declare function describeWhoMadeEnum<TResult>(parameters: IDescribeWhoMadeEnumParameters, options?: IOptions): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>;
export declare const DataType: {
    describeOccasionEnum: typeof describeOccasionEnum;
    describeRecipientEnum: typeof describeRecipientEnum;
    describeWhenMadeEnum: typeof describeWhenMadeEnum;
    describeWhoMadeEnum: typeof describeWhoMadeEnum;
};
export {};
