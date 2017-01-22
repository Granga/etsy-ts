import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IVariationsSelectedProperty {
    property_id: number,
    value_id: number,
    formatted_name: string,
    formatted_value: string,
    is_valid: boolean
}


export class VariationsSelectedProperty {
    constructor(private client: EtsyApiClient) {

    }


}
