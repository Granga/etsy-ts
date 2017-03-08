import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>;
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>;
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>;
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
export declare function deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>;
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
export declare function findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>;
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>;
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>;
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
export declare function deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>;
export declare const ShippingUpgrade: {
    getListingShippingUpgrades: <TResult>(parameters: IGetListingShippingUpgradesParameters) => Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>;
    createListingShippingUpgrade: <TResult>(parameters: ICreateListingShippingUpgradeParameters) => Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>;
    updateListingShippingUpgrade: <TResult>(parameters: IUpdateListingShippingUpgradeParameters) => Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>;
    deleteListingShippingUpgrade: <TResult>(parameters: IDeleteListingShippingUpgradeParameters) => Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>;
    findAllShippingTemplateUpgrades: <TResult>(parameters: IFindAllShippingTemplateUpgradesParameters) => Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>;
    createShippingTemplateUpgrade: <TResult>(parameters: ICreateShippingTemplateUpgradeParameters) => Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>;
    updateShippingTemplateUpgrade: <TResult>(parameters: IUpdateShippingTemplateUpgradeParameters) => Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>;
    deleteShippingTemplateUpgrade: <TResult>(parameters: IDeleteShippingTemplateUpgradeParameters) => Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>;
};
