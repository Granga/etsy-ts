import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const TaxonomyNodeProperty: {
    getTaxonomyNodeProperties: <TResult>(parameters: IGetTaxonomyNodePropertiesParameters, options?: IOptions) => Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>>;
};
