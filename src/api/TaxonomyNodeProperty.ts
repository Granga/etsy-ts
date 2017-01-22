import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ITaxonomyNodeProperty {
    property_id: number,
    name: string,
    display_name: string,
    scales: any[],
    is_required: boolean,
    supports_attributes: boolean,
    supports_variations: boolean,
    is_multivalued: boolean,
    possible_values: any[],
    selected_values: any[]
}


export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number
}

export class TaxonomyNodeProperty {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get the possible properties of a taxonomy node [developer preview - may be unstable]
     */
    getTaxonomyNodeProperties<TResult>(parameters: IGetTaxonomyNodePropertiesParameters): Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>> {
        return this.client.http<IGetTaxonomyNodePropertiesParameters, TResult>("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET");
    }
}
