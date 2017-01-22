import {EtsyApiClient} from "../client/EtsyApiClient";

export interface ITaxonomyPropertyScale {
    scale_id: number,
    display_name: string,
    description: string
}


export class TaxonomyPropertyScale {
    constructor(private client: EtsyApiClient) {

    }


}
