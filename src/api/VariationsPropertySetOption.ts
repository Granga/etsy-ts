import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IVariationsPropertySetOption {
    property_option_id: number,
    name: string,
    formatted_name: string
}


export interface IFindAllSuggestedPropertyOptionsParameters extends IStandardParameters {
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

export class VariationsPropertySetOption {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Finds all suggested property options for a given property.
     */
    findAllSuggestedPropertyOptions<TResult>(parameters: IFindAllSuggestedPropertyOptionsParameters): Promise<IStandardResponse<IFindAllSuggestedPropertyOptionsParameters, TResult>> {
        return this.client.http<IFindAllSuggestedPropertyOptionsParameters, TResult>("/property_options/suggested", parameters, "GET");
    }
}
