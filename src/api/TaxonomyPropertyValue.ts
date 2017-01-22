import {EtsyApiClient} from "../client/EtsyApiClient";

export interface ITaxonomyPropertyValue {
    value_id: number,
    name: string,
    scale_id: number,
    equal_to: number[]
}


export class TaxonomyPropertyValue {
    constructor(private client: EtsyApiClient) {

    }


}
