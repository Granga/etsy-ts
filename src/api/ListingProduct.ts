import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IGetProductParameters {
    listing_id: number,
    product_id: number
}

//methods class
export class ListingProduct extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a specific offering for a listing
     */
    async getProduct<TResult>(
        params: IGetProductParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetProductParameters, TResult>>> {
        return this.request<IGetProductParameters, TResult>(
            "GET",
            "/listings/:listing_id/products/:product_id",
            params,
            extra
        );
    }
}
