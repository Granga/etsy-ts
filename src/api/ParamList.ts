import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IParamList {
    param_name: string
}


export class ParamList {
    constructor(private client: EtsyApiClient) {

    }


}
