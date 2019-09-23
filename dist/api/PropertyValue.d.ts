import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
 * Get all of the attributes for a listing
 */
declare function getAttributes<TResult>(parameters: IGetAttributesParameters, options?: IOptions): Promise<IStandardResponse<IGetAttributesParameters, TResult>>;
/**
 * Get an attribute for a listing
 */
declare function getAttribute<TResult>(parameters: IGetAttributeParameters, options?: IOptions): Promise<IStandardResponse<IGetAttributeParameters, TResult>>;
/**
 * Update or populate an attribute for a listing
 */
declare function updateAttribute<TResult>(parameters: IUpdateAttributeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateAttributeParameters, TResult>>;
/**
 * Delete an attribute for a listing
 */
declare function deleteAttribute<TResult>(parameters: IDeleteAttributeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteAttributeParameters, TResult>>;
export declare const PropertyValue: {
    getAttributes: typeof getAttributes;
    getAttribute: typeof getAttribute;
    updateAttribute: typeof updateAttribute;
    deleteAttribute: typeof deleteAttribute;
};
export {};
