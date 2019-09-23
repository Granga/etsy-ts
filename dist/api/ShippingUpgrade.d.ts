import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingUpgrade {
    /**
     * Identifier for the parent shipping profile
     */
    shipping_profile_id: number;
    /**
     * Identifier for the value
     */
    value_id: number;
    /**
     * Name of the shipping upgrade, e.g. USPS Priority
     */
    value: string;
    /**
     * Additional cost of adding the shipping upgrade
     */
    price: number;
    /**
     * Additional cost of adding the shipping upgrade with another item
     */
    secondary_price: number;
    /**
     * Currency for the price
     */
    currency_code: string;
    /**
     * Domestic (0) or international (1)
     */
    type: number;
    /**
     * Display order
     */
    order: number;
    /**
     * Language code
     */
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
declare function getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters, options?: IOptions): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>;
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
declare function createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>;
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
declare function updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>;
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
declare function deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>;
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
declare function findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>;
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
declare function createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>;
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
declare function updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>;
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
declare function deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>;
export declare const ShippingUpgrade: {
    getListingShippingUpgrades: typeof getListingShippingUpgrades;
    createListingShippingUpgrade: typeof createListingShippingUpgrade;
    updateListingShippingUpgrade: typeof updateListingShippingUpgrade;
    deleteListingShippingUpgrade: typeof deleteListingShippingUpgrade;
    findAllShippingTemplateUpgrades: typeof findAllShippingTemplateUpgrades;
    createShippingTemplateUpgrade: typeof createShippingTemplateUpgrade;
    updateShippingTemplateUpgrade: typeof updateShippingTemplateUpgrade;
    deleteShippingTemplateUpgrade: typeof deleteShippingTemplateUpgrade;
};
export {};
