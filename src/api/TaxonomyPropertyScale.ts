import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class TaxonomyPropertyScale extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


}
