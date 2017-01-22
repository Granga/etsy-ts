import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IListingProduct {
    product_id: number,
    property_values: any[],
    sku: string,
    offerings: any[]
}


export class ListingProduct {
    constructor(private client: EtsyApiClient) {

    }


}
