import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IVariationsPropertySetOptionModifier {
    prefix: string,
    suffix: string
}


export interface IGetPropertyOptionModifierParameters extends IStandardParameters {
    property_id: number,
    category_id?: number,
    recipient_id?: number,
    sizing_scale?: number,
    weight_scale?: number,
    height_scale?: number,
    length_scale?: number,
    width_scale?: number,
    diameter_scale?: number,
    dimensions_scale?: number
}

export class VariationsPropertySetOptionModifier {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Add a value for a given property.
     */
    getPropertyOptionModifier<TResult>(parameters: IGetPropertyOptionModifierParameters): Promise<IStandardResponse<IGetPropertyOptionModifierParameters, TResult>> {
        return this.client.http<IGetPropertyOptionModifierParameters, TResult>("/property_options/modifiers", parameters, "GET");
    }
}
