import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getAttributes <TResult>(parameters: IGetAttributesParameters, options?: IOptions): Promise<IStandardResponse<IGetAttributesParameters, TResult>> {
    return request<IGetAttributesParameters, TResult>("/listings/:listing_id/attributes", parameters, "GET", options);
}
/**
 * Get an attribute for a listing [developer preview - may be unstable]
 */
function getAttribute <TResult>(parameters: IGetAttributeParameters, options?: IOptions): Promise<IStandardResponse<IGetAttributeParameters, TResult>> {
    return request<IGetAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
}
/**
 * Update or populate an attribute for a listing [developer preview - may be unstable]
 */
function updateAttribute <TResult>(parameters: IUpdateAttributeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateAttributeParameters, TResult>> {
    return request<IUpdateAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
}
/**
 * Delete an attribute for a listing [developer preview - may be unstable]
 */
function deleteAttribute <TResult>(parameters: IDeleteAttributeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteAttributeParameters, TResult>> {
    return request<IDeleteAttributeParameters, TResult>("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
}

export const PropertyValue = {getAttributes, getAttribute, updateAttribute, deleteAttribute};
