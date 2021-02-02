import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IShippingUpgrade {
    /**
     * Identifier for the parent shipping profile
     */
    shipping_profile_id: number,
    /**
     * Identifier for the value
     */
    value_id: number,
    /**
     * Name of the shipping upgrade, e.g. USPS Priority
     */
    value: string,
    /**
     * Additional cost of adding the shipping upgrade
     */
    price: number,
    /**
     * Additional cost of adding the shipping upgrade with another item
     */
    secondary_price: number,
    /**
     * Currency for the price
     */
    currency_code: string,
    /**
     * Domestic (0) or international (1)
     */
    type: number,
    /**
     * Display order
     */
    order: number,
    /**
     * Language code
     */
    language: number
}

//parameters types
export interface IGetListingShippingUpgradesParameters {
    listing_id: number
}

export interface ICreateListingShippingUpgradeParameters {
    listing_id: number,
    type: number,
    value: string,
    price: number,
    secondary_price: number
}

export interface IUpdateListingShippingUpgradeParameters {
    listing_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number
}

export interface IDeleteListingShippingUpgradeParameters {
    listing_id: number,
    value_id: number,
    type: number
}

export interface IFindAllShippingTemplateUpgradesParameters {
    shipping_template_id: number
}

export interface ICreateShippingTemplateUpgradeParameters {
    shipping_template_id: number,
    type: number,
    value: string,
    price: number,
    secondary_price: number
}

export interface IUpdateShippingTemplateUpgradeParameters {
    shipping_template_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number
}

export interface IDeleteShippingTemplateUpgradeParameters {
    shipping_template_id: number,
    value_id: number,
    type: number
}

//methods class
export class ShippingUpgrade {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get the shipping upgrades available for a listing.
     */
    async getListingShippingUpgrades<TResult>(
        params: IGetListingShippingUpgradesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>> {
        return request<IGetListingShippingUpgradesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/shipping/upgrades",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async createListingShippingUpgrade<TResult>(
        params: ICreateListingShippingUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>> {
        return request<ICreateListingShippingUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/shipping/upgrades",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async updateListingShippingUpgrade<TResult>(
        params: IUpdateListingShippingUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>> {
        return request<IUpdateListingShippingUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/shipping/upgrades",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async deleteListingShippingUpgrade<TResult>(
        params: IDeleteListingShippingUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>> {
        return request<IDeleteListingShippingUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/shipping/upgrades",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    async findAllShippingTemplateUpgrades<TResult>(
        params: IFindAllShippingTemplateUpgradesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>> {
        return request<IFindAllShippingTemplateUpgradesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id/upgrades",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async createShippingTemplateUpgrade<TResult>(
        params: ICreateShippingTemplateUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>> {
        return request<ICreateShippingTemplateUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id/upgrades",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async updateShippingTemplateUpgrade<TResult>(
        params: IUpdateShippingTemplateUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>> {
        return request<IUpdateShippingTemplateUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id/upgrades",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async deleteShippingTemplateUpgrade<TResult>(
        params: IDeleteShippingTemplateUpgradeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>> {
        return request<IDeleteShippingTemplateUpgradeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id/upgrades",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
