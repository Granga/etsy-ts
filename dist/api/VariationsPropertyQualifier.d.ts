import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IVariationsPropertyQualifier {
    property_id: number;
    options: number[];
    results: [any, any];
    aliases: [any, any];
}
export declare class VariationsPropertyQualifier {
    private client;
    constructor(client: EtsyApiClient);
}
