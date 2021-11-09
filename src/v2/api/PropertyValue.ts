import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IPropertyValue {
    /**
     * The numeric ID of this property.
     */
    property_id: number,
    /**
     * The name of the property, in the requested locale language.
     */
    property_name: string,
    /**
     * The numeric ID of the scale (if any).
     */
    scale_id: number,
    /**
     * The label used to describe the chosen scale (if any).
     */
    scale_name: string,
    /**
     * The numeric IDs of the values.
     */
    value_ids: number[],
    /**
     * The literal values of the value.
     */
    values: string[]
}

//parameters types
export interface IGetAttributesParameters {
    listing_id: number
}
export interface IGetAttributeParameters {
    listing_id: number,
    property_id: number
}
export interface IUpdateAttributeParameters {
    listing_id: number,
    property_id: number,
    value_ids?: number[],
    values?: string[],
    scale_id?: number
}
export interface IDeleteAttributeParameters {
    listing_id: number,
    property_id: number
}

//methods class
export class PropertyValue extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get all of the attributes for a listing
     */
    async getAttributes<TResult>(
        params: IGetAttributesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetAttributesParameters, TResult>>> {
        return this.request<IGetAttributesParameters, TResult>(
            "GET",
            "/listings/:listing_id/attributes",
            params,
            extra
        );
    }

    /**
     * Get an attribute for a listing
     */
    async getAttribute<TResult>(
        params: IGetAttributeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetAttributeParameters, TResult>>> {
        return this.request<IGetAttributeParameters, TResult>(
            "GET",
            "/listings/:listing_id/attributes/:property_id",
            params,
            extra
        );
    }

    /**
     * Update or populate an attribute for a listing
     */
    async updateAttribute<TResult>(
        params: IUpdateAttributeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateAttributeParameters, TResult>>> {
        return this.request<IUpdateAttributeParameters, TResult>(
            "PUT",
            "/listings/:listing_id/attributes/:property_id",
            params,
            extra
        );
    }

    /**
     * Delete an attribute for a listing
     */
    async deleteAttribute<TResult>(
        params: IDeleteAttributeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteAttributeParameters, TResult>>> {
        return this.request<IDeleteAttributeParameters, TResult>(
            "DELETE",
            "/listings/:listing_id/attributes/:property_id",
            params,
            extra
        );
    }
}
