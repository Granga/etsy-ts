import { EtsyApiClient } from "../client/EtsyApiClient";
export interface ITaxonomyPropertyScale {
    scale_id: number;
    display_name: string;
    description: string;
}
export declare class TaxonomyPropertyScale {
    private client;
    constructor(client: EtsyApiClient);
}
