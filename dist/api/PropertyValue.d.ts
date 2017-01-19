/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function getAttributes<TResult>(parameters: IGetAttributesParameters): Bluebird<IStandardResponse<TResult, IGetAttributesParameters>>;
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
export declare function getAttribute<TResult>(parameters: IGetAttributeParameters): Bluebird<IStandardResponse<TResult, IGetAttributeParameters>>;
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
export declare function updateAttribute<TResult>(parameters: IUpdateAttributeParameters): Bluebird<IStandardResponse<TResult, IUpdateAttributeParameters>>;
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
export declare function deleteAttribute<TResult>(parameters: IDeleteAttributeParameters): Bluebird<IStandardResponse<TResult, IDeleteAttributeParameters>>;
