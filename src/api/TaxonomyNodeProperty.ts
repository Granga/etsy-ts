import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface ITaxonomyNodeProperty {
    /**
     * The ID of the property.
     */
    property_id: number,
    /**
     * The name of the property.
     */
    name: string,
    /**
     * The name used in user interfaces.
     */
    display_name: string,
    /**
     * A list of available scales.
     */
    scales: any[],
    /**
     * Is this attribute required for listings in this category?
     */
    is_required: boolean,
    /**
     * Can this property be used in listing attributes?
     */
    supports_attributes: boolean,
    /**
     * Can this property be used in listing variations?
     */
    supports_variations: boolean,
    /**
     * Can this property have multiple values?
     */
    is_multivalued: boolean,
    /**
     * A list of allowed values.
     */
    possible_values: any[],
    /**
     * A list of values that are always selected for the given category.
     */
    selected_values: any[]
}

//parameters types
export interface IGetTaxonomyNodePropertiesParameters {
    taxonomy_id: number
}

//methods class
export class TaxonomyNodeProperty extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get the possible properties of a taxonomy node
     */
    async getTaxonomyNodeProperties<TResult>(
        params: IGetTaxonomyNodePropertiesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>>> {
        return this.request<IGetTaxonomyNodePropertiesParameters, TResult>(
            "GET",
            "/taxonomy/seller/:taxonomy_id/properties",
            params,
            extra
        );
    }
}
