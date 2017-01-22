import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IStructuredPolicies {
    structured_policies_id: number,
    payments: any,
    refunds: any,
    shipping: any,
    create_date: number,
    update_date: number,
    create_date_formatted: string,
    update_date_formatted: string,
    has_unstructured_policies: boolean,
    additional_terms_and_conditions: string,
    shop_in_germany: boolean,
    char_limits: any,
    include_dispute_form_link: boolean,
    privacy: any
}


export class StructuredPolicies {
    constructor(private client: EtsyApiClient) {

    }


}
