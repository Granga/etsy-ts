import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getListingShippingUpgrades <TResult>(parameters: IGetListingShippingUpgradesParameters, options?: IOptions): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>> {
    return request<IGetListingShippingUpgradesParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "GET", options);
}
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function createListingShippingUpgrade <TResult>(parameters: ICreateListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>> {
    return request<ICreateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "POST", options);
}
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function updateListingShippingUpgrade <TResult>(parameters: IUpdateListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>> {
    return request<IUpdateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "PUT", options);
}
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function deleteListingShippingUpgrade <TResult>(parameters: IDeleteListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>> {
    return request<IDeleteListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "DELETE", options);
}
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
function findAllShippingTemplateUpgrades <TResult>(parameters: IFindAllShippingTemplateUpgradesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>> {
    return request<IFindAllShippingTemplateUpgradesParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET", options);
}
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function createShippingTemplateUpgrade <TResult>(parameters: ICreateShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>> {
    return request<ICreateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST", options);
}
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function updateShippingTemplateUpgrade <TResult>(parameters: IUpdateShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>> {
    return request<IUpdateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT", options);
}
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function deleteShippingTemplateUpgrade <TResult>(parameters: IDeleteShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>> {
    return request<IDeleteShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE", options);
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
