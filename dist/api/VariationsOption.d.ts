import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IVariationsOption {
    value_id: number;
    value: string;
    formatted_value: string;
    is_available: boolean;
    price_diff: number;
    price: number;
}
export declare class VariationsOption {
    private client;
    constructor(client: EtsyApiClient);
}
