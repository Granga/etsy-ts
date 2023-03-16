import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
    language: number,
    /**
     * The minimum delivery time that a shipment will take, in days.
     */
    min_delivery_time: number,
    /**
     * The maximum delivery time that a shipment will take, in days.
     */
    max_delivery_time: number,
    /**
     * The numeric ID of the shipping carrier.
     */
    shipping_carrier_id: number,
    /**
     * The string representation of a shipping carrier's mail class.
     */
    mail_class: string
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
    secondary_price: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
}

export interface IUpdateListingShippingUpgradeParameters {
    listing_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
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
    secondary_price: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
}

export interface IUpdateShippingTemplateUpgradeParameters {
    shipping_template_id: number,
    value_id: number,
    type: number,
    price: number,
    secondary_price: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
}

export interface IDeleteShippingTemplateUpgradeParameters {
    shipping_template_id: number,
    value_id: number,
    type: number
}

//methods class
export class ShippingUpgrade extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get the shipping upgrades available for a listing.
     */
    async getListingShippingUpgrades<TResult>(
        params: IGetListingShippingUpgradesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>> {
        return this.request<IGetListingShippingUpgradesParameters, TResult>("GET", "/listings/:listing_id/shipping/upgrades", params, extra);
    }

    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async createListingShippingUpgrade<TResult>(
        params: ICreateListingShippingUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>> {
        return this.request<ICreateListingShippingUpgradeParameters, TResult>("POST", "/listings/:listing_id/shipping/upgrades", params, extra);
    }

    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async updateListingShippingUpgrade<TResult>(
        params: IUpdateListingShippingUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>> {
        return this.request<IUpdateListingShippingUpgradeParameters, TResult>("PUT", "/listings/:listing_id/shipping/upgrades", params, extra);
    }

    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async deleteListingShippingUpgrade<TResult>(
        params: IDeleteListingShippingUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>> {
        return this.request<IDeleteListingShippingUpgradeParameters, TResult>("DELETE", "/listings/:listing_id/shipping/upgrades", params, extra);
    }

    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    async findAllShippingTemplateUpgrades<TResult>(
        params: IFindAllShippingTemplateUpgradesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>> {
        return this.request<IFindAllShippingTemplateUpgradesParameters, TResult>(
            "GET",
            "/shipping/templates/:shipping_template_id/upgrades",
            params,
            extra
        );
    }

    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async createShippingTemplateUpgrade<TResult>(
        params: ICreateShippingTemplateUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>> {
        return this.request<ICreateShippingTemplateUpgradeParameters, TResult>(
            "POST",
            "/shipping/templates/:shipping_template_id/upgrades",
            params,
            extra
        );
    }

    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async updateShippingTemplateUpgrade<TResult>(
        params: IUpdateShippingTemplateUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>> {
        return this.request<IUpdateShippingTemplateUpgradeParameters, TResult>(
            "PUT",
            "/shipping/templates/:shipping_template_id/upgrades",
            params,
            extra
        );
    }

    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async deleteShippingTemplateUpgrade<TResult>(
        params: IDeleteShippingTemplateUpgradeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>> {
        return this.request<IDeleteShippingTemplateUpgradeParameters, TResult>(
            "DELETE",
            "/shipping/templates/:shipping_template_id/upgrades",
            params,
            extra
        );
    }
}
