import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Get the shipping upgrades available for a listing.
 */
export function getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters): Bluebird<IStandardResponse<TResult, IGetListingShippingUpgradesParameters>> {
    return request<IStandardResponse<TResult, IGetListingShippingUpgradesParameters>>(parameters, '/listings/:listing_id/shipping/upgrades', 'GET');
}
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, ICreateListingShippingUpgradeParameters>> {
    return request<IStandardResponse<TResult, ICreateListingShippingUpgradeParameters>>(parameters, '/listings/:listing_id/shipping/upgrades', 'POST');
}
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, IUpdateListingShippingUpgradeParameters>> {
    return request<IStandardResponse<TResult, IUpdateListingShippingUpgradeParameters>>(parameters, '/listings/:listing_id/shipping/upgrades', 'PUT');
}
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export function deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, IDeleteListingShippingUpgradeParameters>> {
    return request<IStandardResponse<TResult, IDeleteListingShippingUpgradeParameters>>(parameters, '/listings/:listing_id/shipping/upgrades', 'DELETE');
}
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
export function findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Bluebird<IStandardResponse<TResult, IFindAllShippingTemplateUpgradesParameters>> {
    return request<IStandardResponse<TResult, IFindAllShippingTemplateUpgradesParameters>>(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'GET');
}
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, ICreateShippingTemplateUpgradeParameters>> {
    return request<IStandardResponse<TResult, ICreateShippingTemplateUpgradeParameters>>(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'POST');
}
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingTemplateUpgradeParameters>> {
    return request<IStandardResponse<TResult, IUpdateShippingTemplateUpgradeParameters>>(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'PUT');
}
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export function deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingTemplateUpgradeParameters>> {
    return request<IStandardResponse<TResult, IDeleteShippingTemplateUpgradeParameters>>(parameters, '/shipping/templates/:shipping_template_id/upgrades', 'DELETE');
}
