import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface ITaxonomyNodeProperty {
    property_id: number;
    name: string;
    display_name: string;
    scales: any[];
    is_required: boolean;
    supports_attributes: boolean;
    supports_variations: boolean;
    is_multivalued: boolean;
    possible_values: any[];
    selected_values: any[];
}
export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number;
}
/**
 * Get the possible properties of a taxonomy node [developer preview - may be unstable]
 */
export declare function getTaxonomyNodeProperties<TResult>(parameters: IGetTaxonomyNodePropertiesParameters): Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>>;
export declare const TaxonomyNodeProperty: {
    getTaxonomyNodeProperties: <TResult>(parameters: IGetTaxonomyNodePropertiesParameters) => Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>>;
};
