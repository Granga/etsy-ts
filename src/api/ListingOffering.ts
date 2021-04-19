import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number,
    /**
     * The price of the product
     */
    price: any,
    /**
     * How many of this product are available?
     */
    quantity: number,
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean,
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean
}

//parameters types
export interface IGetOfferingParameters {
    listing_id: number,
    product_id: number,
    offering_id: number
}

//methods class
export class ListingOffering extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a specific offering for a listing
     */
    async getOffering<TResult>(
        params: IGetOfferingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetOfferingParameters, TResult>>> {
        return this.request<IGetOfferingParameters, TResult>(
            "GET",
            "/listings/:listing_id/products/:product_id/offerings/:offering_id",
            params,
            extra
        );
    }
}
