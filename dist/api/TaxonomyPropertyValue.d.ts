import { EtsyApiClient } from "../client/EtsyApiClient";
export interface ITaxonomyPropertyValue {
    value_id: number;
    name: string;
    scale_id: number;
    equal_to: number[];
}
export declare class TaxonomyPropertyValue {
    private client;
    constructor(client: EtsyApiClient);
}
