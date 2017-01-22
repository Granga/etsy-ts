import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IVariationsPropertyQualifier {
    property_id: number,
    options: number[],
    results: [any, any],
    aliases: [any, any]
}


export class VariationsPropertyQualifier {
    constructor(private client: EtsyApiClient) {

    }


}
