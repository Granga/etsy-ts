import { ApiMethod } from "./ApiMethod";
import { EtsyApiClient } from "../client/EtsyApiClient";
export default class EtsyApi {
    private client;
    private _apiMethod;
    constructor(client: EtsyApiClient);
    readonly ApiMethod: ApiMethod;
}
