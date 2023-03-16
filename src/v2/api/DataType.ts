import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IDescribeWhenMadeEnumParameters {
    include_formatted?: boolean
}

export interface IDescribeWhoMadeEnumParameters {

}

//methods class
export class DataType extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Describes the legal values for Listing.when_made.
     */
    async describeWhenMadeEnum<TResult>(
        params: IDescribeWhenMadeEnumParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>> {
        return this.request<IDescribeWhenMadeEnumParameters, TResult>("GET", "/types/enum/when_made", params, extra);
    }

    /**
     * Describes the legal values for Listing.who_made.
     */
    async describeWhoMadeEnum<TResult>(
        params: IDescribeWhoMadeEnumParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>> {
        return this.request<IDescribeWhoMadeEnumParameters, TResult>("GET", "/types/enum/who_made", params, extra);
    }
}
