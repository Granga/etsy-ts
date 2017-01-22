import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IVariationsOption {
    value_id: number,
    value: string,
    formatted_value: string,
    is_available: boolean,
    price_diff: number,
    price: number
}


export class VariationsOption {
    constructor(private client: EtsyApiClient) {

    }


}
