import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

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
export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number
}

//methods class
export class TaxonomyNodeProperty {

    /**
     * Get the possible properties of a taxonomy node
     */
    static getTaxonomyNodeProperties<TResult>(parameters: IGetTaxonomyNodePropertiesParameters, options?: IOptions): Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>> {
        return request<IGetTaxonomyNodePropertiesParameters, TResult>("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
    }
}
