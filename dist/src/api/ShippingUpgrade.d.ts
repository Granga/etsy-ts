import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IGetListingShippingUpgradesParameters {
    listing_id: number;
}
export interface ICreateListingShippingUpgradeParameters {
    listing_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateListingShippingUpgradeParameters {
    listing_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteListingShippingUpgradeParameters {
    listing_id: number;
    value_id: number;
    type: number;
}
export interface IFindAllShippingTemplateUpgradesParameters {
    shipping_template_id: number;
}
export interface ICreateShippingTemplateUpgradeParameters {
    shipping_template_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateShippingTemplateUpgradeParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteShippingTemplateUpgradeParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
}
export declare class ShippingUpgrade {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades<TResult>(params: IGetListingShippingUpgradesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>>;
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade<TResult>(params: ICreateListingShippingUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>>;
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade<TResult>(params: IUpdateListingShippingUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>>;
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade<TResult>(params: IDeleteListingShippingUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>>;
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades<TResult>(params: IFindAllShippingTemplateUpgradesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>>;
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade<TResult>(params: ICreateShippingTemplateUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>>;
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade<TResult>(params: IUpdateShippingTemplateUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>>;
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade<TResult>(params: IDeleteShippingTemplateUpgradeParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>>;
}
