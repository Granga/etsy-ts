/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IShippingUpgrade {
    shipping_profile_id: number;
    value_id: number;
    value: string;
    price: number;
    secondary_price: number;
    currency_code: string;
    type: number;
    order: number;
    language: number;
}
export interface IGetListingShippingUpgradesParameters extends IStandardParameters {
    listing_id: number;
}
export interface ICreateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
}
export interface IFindAllShippingTemplateUpgradesParameters extends IStandardParameters {
    shipping_template_id: number;
}
export interface ICreateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
}
/**
 * Get the shipping upgrades available for a listing.
 */
export declare function getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters): Bluebird<IStandardResponse<TResult, IGetListingShippingUpgradesParameters>>;
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, ICreateListingShippingUpgradeParameters>>;
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, IUpdateListingShippingUpgradeParameters>>;
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters): Bluebird<IStandardResponse<TResult, IDeleteListingShippingUpgradeParameters>>;
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
export declare function findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Bluebird<IStandardResponse<TResult, IFindAllShippingTemplateUpgradesParameters>>;
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, ICreateShippingTemplateUpgradeParameters>>;
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingTemplateUpgradeParameters>>;
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingTemplateUpgradeParameters>>;
