import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class TaxonomyNodeProperty {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get the possible properties of a taxonomy node
     */
    async getTaxonomyNodeProperties<TResult>(
        params: IGetTaxonomyNodePropertiesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>>> {
        return request<IGetTaxonomyNodePropertiesParameters, TResult>({
            ...this.config,
            url: "/taxonomy/seller/:taxonomy_id/properties",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
