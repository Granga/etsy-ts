import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class PropertyValue {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Get all of the attributes for a listing
     */
    async getAttributes<TResult>(
        params: IGetAttributesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetAttributesParameters, TResult>>> {
        return request<IGetAttributesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/attributes",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get an attribute for a listing
     */
    async getAttribute<TResult>(
        params: IGetAttributeParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetAttributeParameters, TResult>>> {
        return request<IGetAttributeParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/attributes/:property_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Update or populate an attribute for a listing
     */
    async updateAttribute<TResult>(
        params: IUpdateAttributeParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateAttributeParameters, TResult>>> {
        return request<IUpdateAttributeParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/attributes/:property_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Delete an attribute for a listing
     */
    async deleteAttribute<TResult>(
        params: IDeleteAttributeParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteAttributeParameters, TResult>>> {
        return request<IDeleteAttributeParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/attributes/:property_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
