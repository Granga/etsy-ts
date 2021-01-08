import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";

//fields
export interface ITaxonomyPropertyValue {
    /**
     * The numeric ID of this value.
     */
    value_id: number,
    /**
     * How to display the value.
     */
    name: string,
    /**
     * The ID of the scale this belongs to (if any).
     */
    scale_id: number,
    /**
     * The order of this value under its property
     */
    order: number,
    /**
     * The list of values this value is equal to (if any).
     */
    equal_to: number[]
}

//parameters types


//methods class
export class TaxonomyPropertyValue {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


}
