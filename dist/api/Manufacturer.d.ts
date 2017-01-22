import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IManufacturer {
    name: string;
    description: string[];
    location: string;
}
export declare class Manufacturer {
    private client;
    constructor(client: EtsyApiClient);
}
