import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Get all of the attributes for a listing [developer preview - may be unstable]
 */
export declare function getAttributes<TResult>(parameters: IGetAttributesParameters): Promise<IStandardResponse<IGetAttributesParameters, TResult>>;
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
export declare function getAttribute<TResult>(parameters: IGetAttributeParameters): Promise<IStandardResponse<IGetAttributeParameters, TResult>>;
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
export declare function updateAttribute<TResult>(parameters: IUpdateAttributeParameters): Promise<IStandardResponse<IUpdateAttributeParameters, TResult>>;
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
export declare function deleteAttribute<TResult>(parameters: IDeleteAttributeParameters): Promise<IStandardResponse<IDeleteAttributeParameters, TResult>>;
export declare const PropertyValue: {
    getAttributes: <TResult>(parameters: IGetAttributesParameters) => Promise<IStandardResponse<IGetAttributesParameters, TResult>>;
    getAttribute: <TResult>(parameters: IGetAttributeParameters) => Promise<IStandardResponse<IGetAttributeParameters, TResult>>;
    updateAttribute: <TResult>(parameters: IUpdateAttributeParameters) => Promise<IStandardResponse<IUpdateAttributeParameters, TResult>>;
    deleteAttribute: <TResult>(parameters: IDeleteAttributeParameters) => Promise<IStandardResponse<IDeleteAttributeParameters, TResult>>;
};
