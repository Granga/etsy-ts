import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IPropertyValue {
    property_id: number,
    property_name: string,
    scale_id: number,
    scale_label: string,
    value_ids: number[],
    values: string[]
}

//parameters types

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

//methods

/**
 * Get all of the attributes for a listing [developer preview - may be unstable]
 */
export function getAttributes <TResult>(parameters: IGetAttributesParameters): Promise<IStandardResponse<IGetAttributesParameters, TResult>> {
    return request<IGetAttributesParameters, TResult>("/listings/:listing_id/attributes", parameters, "GET");
}
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
export function getAttribute <TResult>(parameters: IGetAttributeParameters): Promise<IStandardResponse<IGetAttributeParameters, TResult>> {
    return request<IGetAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "GET");
}
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
export function updateAttribute <TResult>(parameters: IUpdateAttributeParameters): Promise<IStandardResponse<IUpdateAttributeParameters, TResult>> {
    return request<IUpdateAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "PUT");
}
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
export function deleteAttribute <TResult>(parameters: IDeleteAttributeParameters): Promise<IStandardResponse<IDeleteAttributeParameters, TResult>> {
    return request<IDeleteAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "DELETE");
}

export const PropertyValue = {getAttributes, getAttribute, updateAttribute, deleteAttribute};
