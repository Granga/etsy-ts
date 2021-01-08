import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";

//fields
export interface IParamList {
    /**
     * Each field in the record represents an Etsy API method parameter.  The value corresponds to one of the documented data or resource types.
     */
    param_name: string
}

//parameters types


//methods class
export class ParamList {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


}
