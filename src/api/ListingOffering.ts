import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IListingOffering {
    offering_id: number,
    price: any,
    quantity: number,
    is_enabled: boolean
}


export class ListingOffering {
    constructor(private client: EtsyApiClient) {

    }


}
