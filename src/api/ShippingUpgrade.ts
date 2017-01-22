import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class ShippingUpgrade {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>> {
        return this.client.http<IGetListingShippingUpgradesParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "GET");
    }

    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>> {
        return this.client.http<ICreateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "POST");
    }

    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>> {
        return this.client.http<IUpdateListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "PUT");
    }

    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>> {
        return this.client.http<IDeleteListingShippingUpgradeParameters, TResult>("/listings/:listing_id/shipping/upgrades", parameters, "DELETE");
    }

    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>> {
        return this.client.http<IFindAllShippingTemplateUpgradesParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET");
    }

    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>> {
        return this.client.http<ICreateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST");
    }

    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>> {
        return this.client.http<IUpdateShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT");
    }

    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>> {
        return this.client.http<IDeleteShippingTemplateUpgradeParameters, TResult>("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE");
    }
}
