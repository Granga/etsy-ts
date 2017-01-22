import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IApiMethod {
    name: string,
    uri: string,
    params: any,
    defaults: any,
    type: string,
    visibility: string,
    http_method: string
}


export interface IGetMethodTableParameters extends IStandardParameters {

}

export class ApiMethod {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get a list of all methods available.
     */
    getMethodTable<TResult>(parameters: IGetMethodTableParameters): Promise<IStandardResponse<IGetMethodTableParameters, TResult>> {
        return this.client.http<IGetMethodTableParameters, TResult>("/", parameters, "GET");
    }
}
