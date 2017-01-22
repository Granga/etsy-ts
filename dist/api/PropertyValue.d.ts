import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IPropertyValue {
    property_id: number;
    property_name: string;
    scale_id: number;
    scale_label: string;
    value_ids: number[];
    values: string[];
}
export interface IGetAttributesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IGetAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}
export interface IUpdateAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value_ids?: number[];
    values?: string[];
    scale_id?: number;
}
export interface IDeleteAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}
export declare class PropertyValue {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Get all of the attributes for a listing [developer preview - may be unstable]
     */
    getAttributes<TResult>(parameters: IGetAttributesParameters): Promise<IStandardResponse<IGetAttributesParameters, TResult>>;
    /**
     * Get an attribute for a listing [developer preview - may be unstable]
     */
    getAttribute<TResult>(parameters: IGetAttributeParameters): Promise<IStandardResponse<IGetAttributeParameters, TResult>>;
    /**
     * Update or populate an attribute for a listing [developer preview - may be unstable]
     */
    updateAttribute<TResult>(parameters: IUpdateAttributeParameters): Promise<IStandardResponse<IUpdateAttributeParameters, TResult>>;
    /**
     * Delete an attribute for a listing [developer preview - may be unstable]
     */
    deleteAttribute<TResult>(parameters: IDeleteAttributeParameters): Promise<IStandardResponse<IDeleteAttributeParameters, TResult>>;
}
