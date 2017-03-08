import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IShippingUpgrade {
    shipping_profile_id: number,
    value_id: number,
    value: string,
    price: number,
    secondary_price: number,
    currency_code: string,
    type: number,
    order: number,
    language: number
}

//parameters types

export interface IGetListingShippingUpgradesParameters extends IStandardParameters {
    listing_id: number
}
export interface ICreateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number,
    type: number,
    value: string,
    price: number,
    secondary_price: number
}
export interface IUpdateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number
}
export interface IDeleteListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number,
    value_id: number,
    type: number
}
export interface IFindAllShippingTemplateUpgradesParameters extends IStandardParameters {
    shipping_template_id: number
}
export interface ICreateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number,
    type: number,
    value: string,
    price: number,
    secondary_price: number
}
export interface IUpdateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number
}
export interface IDeleteShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number,
    value_id: number,
    type: number
}

//methods

/**
 * Get the shipping upgrades available for a listing.
 */
export function getListingShippingUpgrades <TResult>(parameters: IGetListingShippingUpgradesParameters): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>> {
    return request<IGetListingShippingUpgradesParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "GET");
}
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function createListingShippingUpgrade <TResult>(parameters: ICreateListingShippingUpgradeParameters): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>> {
    return request<ICreateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "POST");
}
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function updateListingShippingUpgrade <TResult>(parameters: IUpdateListingShippingUpgradeParameters): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>> {
    return request<IUpdateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "PUT");
}
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function deleteListingShippingUpgrade <TResult>(parameters: IDeleteListingShippingUpgradeParameters): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>> {
    return request<IDeleteListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "DELETE");
}
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
export function findAllShippingTemplateUpgrades <TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>> {
    return request<IFindAllShippingTemplateUpgradesParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET");
}
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function createShippingTemplateUpgrade <TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>> {
    return request<ICreateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST");
}
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function updateShippingTemplateUpgrade <TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>> {
    return request<IUpdateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT");
}
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function deleteShippingTemplateUpgrade <TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>> {
    return request<IDeleteShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE");
}

export const ShippingUpgrade = {
    getListingShippingUpgrades,
    createListingShippingUpgrade,
    updateListingShippingUpgrade,
    deleteListingShippingUpgrade,
    findAllShippingTemplateUpgrades,
    createShippingTemplateUpgrade,
    updateShippingTemplateUpgrade,
    deleteShippingTemplateUpgrade
};
