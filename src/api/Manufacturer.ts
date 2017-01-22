import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IManufacturer {
    name: string,
    description: string[],
    location: string
}


export class Manufacturer {
    constructor(private client: EtsyApiClient) {

    }


}
