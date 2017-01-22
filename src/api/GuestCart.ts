import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IGuestCart {
    cart_id: number,
    shop_name: string,
    message_to_seller: string,
    destination_country_id: number,
    coupon_code: string,
    currency_code: string,
    total: string,
    subtotal: string,
    shipping_cost: string,
    tax_cost: string,
    discount_amount: string,
    shipping_discount_amount: string,
    tax_discount_amount: string,
    url: string,
    listings: any[],
    is_download_only: boolean,
    has_vat: boolean,
    shipping_option: any
}


export interface IFindAllGuestCartsParameters extends IStandardParameters {
    guest_id: any
}
export interface IAddToGuestCartParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}
export interface IUpdateGuestCartListingQuantityParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}
export interface IRemoveGuestCartListingParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    listing_customization_id?: number
}
export interface IFindGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number
}
export interface IUpdateGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}
export interface IDeleteGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number
}

export class GuestCart {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get all guest's carts
     */
    findAllGuestCarts<TResult>(parameters: IFindAllGuestCartsParameters): Promise<IStandardResponse<IFindAllGuestCartsParameters, TResult>> {
        return this.client.http<IFindAllGuestCartsParameters, TResult>("/guests/:guest_id/carts", parameters, "GET");
    }

    /**
     * Add a listing to guest's cart
     */
    addToGuestCart<TResult>(parameters: IAddToGuestCartParameters): Promise<IStandardResponse<IAddToGuestCartParameters, TResult>> {
        return this.client.http<IAddToGuestCartParameters, TResult>("/guests/:guest_id/carts", parameters, "POST");
    }

    /**
     * Update a guest's cart listing purchase quantity
     */
    updateGuestCartListingQuantity<TResult>(parameters: IUpdateGuestCartListingQuantityParameters): Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>> {
        return this.client.http<IUpdateGuestCartListingQuantityParameters, TResult>("/guests/:guest_id/carts", parameters, "PUT");
    }

    /**
     * Remove a listing from a guest's cart
     */
    removeGuestCartListing<TResult>(parameters: IRemoveGuestCartListingParameters): Promise<IStandardResponse<IRemoveGuestCartListingParameters, TResult>> {
        return this.client.http<IRemoveGuestCartListingParameters, TResult>("/guests/:guest_id/carts", parameters, "DELETE");
    }

    /**
     * Get a guest's cart
     */
    findGuestCart<TResult>(parameters: IFindGuestCartParameters): Promise<IStandardResponse<IFindGuestCartParameters, TResult>> {
        return this.client.http<IFindGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "GET");
    }

    /**
     * Update a guest's cart
     */
    updateGuestCart<TResult>(parameters: IUpdateGuestCartParameters): Promise<IStandardResponse<IUpdateGuestCartParameters, TResult>> {
        return this.client.http<IUpdateGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "PUT");
    }

    /**
     * Delete a guest's cart
     */
    deleteGuestCart<TResult>(parameters: IDeleteGuestCartParameters): Promise<IStandardResponse<IDeleteGuestCartParameters, TResult>> {
        return this.client.http<IDeleteGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "DELETE");
    }
}
