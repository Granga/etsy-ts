import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const ShippingUpgrade: {
    getListingShippingUpgrades: <TResult>(parameters: IGetListingShippingUpgradesParameters, options?: IOptions) => Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>;
    createListingShippingUpgrade: <TResult>(parameters: ICreateListingShippingUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>;
    updateListingShippingUpgrade: <TResult>(parameters: IUpdateListingShippingUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>;
    deleteListingShippingUpgrade: <TResult>(parameters: IDeleteListingShippingUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>;
    findAllShippingTemplateUpgrades: <TResult>(parameters: IFindAllShippingTemplateUpgradesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>;
    createShippingTemplateUpgrade: <TResult>(parameters: ICreateShippingTemplateUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>;
    updateShippingTemplateUpgrade: <TResult>(parameters: IUpdateShippingTemplateUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>;
    deleteShippingTemplateUpgrade: <TResult>(parameters: IDeleteShippingTemplateUpgradeParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>;
};
