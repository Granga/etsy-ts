import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IPropertyValue {
    property_id: number,
    property_name: string,
    scale_id: number,
    scale_label: string,
    value_ids: number[],
    values: string[]
}

export interface IGetAttributesParameters extends IStandardParameters {
    listing_id: number
}
export interface IGetAttributeParameters extends IStandardParameters {
    listing_id: number,
    property_id: number
}
export interface IUpdateAttributeParameters extends IStandardParameters {
    listing_id: number,
    property_id: number,
    value_ids?: number[],
    values?: string[],
    scale_id?: number
}
export interface IDeleteAttributeParameters extends IStandardParameters {
    listing_id: number,
    property_id: number
}

/**
 * Get all of the attributes for a listing [developer preview - may be unstable]
 */
export function getAttributes<TResult>(parameters: IGetAttributesParameters): Bluebird<IStandardResponse<TResult, IGetAttributesParameters>> {
    return request<IStandardResponse<TResult, IGetAttributesParameters>>(parameters, '/listings/:listing_id/attributes', 'GET');
}
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
export function getAttribute<TResult>(parameters: IGetAttributeParameters): Bluebird<IStandardResponse<TResult, IGetAttributeParameters>> {
    return request<IStandardResponse<TResult, IGetAttributeParameters>>(parameters, '/listings/:listing_id/attributes/:property_id', 'GET');
}
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
export function updateAttribute<TResult>(parameters: IUpdateAttributeParameters): Bluebird<IStandardResponse<TResult, IUpdateAttributeParameters>> {
    return request<IStandardResponse<TResult, IUpdateAttributeParameters>>(parameters, '/listings/:listing_id/attributes/:property_id', 'PUT');
}
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
export function deleteAttribute<TResult>(parameters: IDeleteAttributeParameters): Bluebird<IStandardResponse<TResult, IDeleteAttributeParameters>> {
    return request<IStandardResponse<TResult, IDeleteAttributeParameters>>(parameters, '/listings/:listing_id/attributes/:property_id', 'DELETE');
}
