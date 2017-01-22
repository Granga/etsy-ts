import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IListingOffering {
    offering_id: number;
    price: any;
    quantity: number;
    is_enabled: boolean;
}
export declare class ListingOffering {
    private client;
    constructor(client: EtsyApiClient);
}
