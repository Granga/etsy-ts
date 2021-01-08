import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";

//fields
export interface ITaxonomyPropertyScale {
    /**
     * The ID of the scale.
     */
    scale_id: number,
    /**
     * How to label the scale.
     */
    display_name: string,
    /**
     * A description of the scale.
     */
    description: string
}

//parameters types


//methods class
export class TaxonomyPropertyScale {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


}
