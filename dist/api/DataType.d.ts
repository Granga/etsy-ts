import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const DataType: {
    describeOccasionEnum: <TResult>(parameters: IDescribeOccasionEnumParameters, options?: IOptions) => Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>;
    describeRecipientEnum: <TResult>(parameters: IDescribeRecipientEnumParameters, options?: IOptions) => Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>;
    describeWhenMadeEnum: <TResult>(parameters: IDescribeWhenMadeEnumParameters, options?: IOptions) => Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>;
    describeWhoMadeEnum: <TResult>(parameters: IDescribeWhoMadeEnumParameters, options?: IOptions) => Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>;
};
