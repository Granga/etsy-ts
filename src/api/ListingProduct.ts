import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IListingProduct {
    /**
     * The numeric ID of this product.
     */
    product_id: number,
    /**
     * A list of 0-2 properties associated with this product and their values.
     */
    property_values: any[],
    /**
     * The product identifier (if set).
     */
    sku: string,
    /**
     * A JSON list of active offerings for this product.
     */
    offerings: any[],
    /**
     * Has the product been deleted?
     */
    is_deleted: boolean
}

//parameters types
export interface IGetProductParameters extends IStandardParameters {
    listing_id: number,
    product_id: number
}

//methods
/**
 * Get a specific offering for a listing
 */
function getProduct<TResult>(parameters: IGetProductParameters, options?: IOptions): Promise<IStandardResponse<IGetProductParameters, TResult>> {
    return request<IGetProductParameters, TResult>("/listings/:listing_id/products/:product_id", parameters, "GET", options);
}

export const ListingProduct = {getProduct};
