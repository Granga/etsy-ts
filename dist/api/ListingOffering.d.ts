import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number;
    /**
     * The price of the product
     */
    price: any;
    /**
     * How many of this product are available?
     */
    quantity: number;
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean;
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean;
}
export interface IGetOfferingParameters extends IStandardParameters {
    listing_id: number;
    product_id: number;
    offering_id: number;
}
export declare class ListingOffering {
    /**
     * Get a specific offering for a listing
     */
    static getOffering<TResult>(parameters: IGetOfferingParameters, options?: IOptions): Promise<IStandardResponse<IGetOfferingParameters, TResult>>;
}
