import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IParamList {
    param_name: string;
}
export declare class ParamList {
    private client;
    constructor(client: EtsyApiClient);
}
