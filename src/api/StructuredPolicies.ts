//fields
export interface IStructuredPolicies {
    /**
     * Unqiue identifier for the policies
     */
    structured_policies_id: number,
    /**
     * Payment information for the seller.
     */
    payments: any,
    /**
     * Structured refunds information for the seller.
     */
    refunds: any,
    /**
     * Structured shipping information for the seller.
     */
    shipping: any,
    create_date: number,
    update_date: number,
    create_date_formatted: string,
    update_date_formatted: string,
    /**
     * True if the shop has previously filled out any unstructured policies.
     */
    has_unstructured_policies: boolean,
    additional_terms_and_conditions: string,
    /**
     * True if the shop is in Germany
     */
    shop_in_germany: boolean,
    /**
     * Character limits for custom fields
     */
    char_limits: any,
    /**
     * Whether to include a link to dispute resolution form.
     */
    include_dispute_form_link: boolean,
    /**
     * Privacy policy for the shop.
     */
    privacy: any
}

//parameters types


//methods class
export class StructuredPolicies {

}
