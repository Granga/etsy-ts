import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IPropertyValue {
    /**
     * The numeric ID of this property.
     */
    property_id: number;
    /**
     * The name of the property, in the requested locale language.
     */
    property_name: string;
    /**
     * The numeric ID of the scale (if any).
     */
    scale_id: number;
    /**
     * The label used to describe the chosen scale (if any).
     */
    scale_name: string;
    /**
     * The numeric IDs of the values.
     */
    value_ids: number[];
    /**
     * The literal values of the value.
     */
    values: string[];
}
export interface IGetAttributesParameters {
    listing_id: number;
}
export interface IGetAttributeParameters {
    listing_id: number;
    property_id: number;
}
export interface IUpdateAttributeParameters {
    listing_id: number;
    property_id: number;
    value_ids?: number[];
    values?: string[];
    scale_id?: number;
}
export interface IDeleteAttributeParameters {
    listing_id: number;
    property_id: number;
}
export declare class PropertyValue {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Get all of the attributes for a listing
     */
    getAttributes<TResult>(params: IGetAttributesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetAttributesParameters, TResult>>>;
    /**
     * Get an attribute for a listing
     */
    getAttribute<TResult>(params: IGetAttributeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetAttributeParameters, TResult>>>;
    /**
     * Update or populate an attribute for a listing
     */
    updateAttribute<TResult>(params: IUpdateAttributeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateAttributeParameters, TResult>>>;
    /**
     * Delete an attribute for a listing
     */
    deleteAttribute<TResult>(params: IDeleteAttributeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteAttributeParameters, TResult>>>;
}
