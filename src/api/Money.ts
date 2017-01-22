import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IMoney {
    amount: number,
    divisor: number,
    currency_code: string,
    formatted_raw: string,
    formatted_short: string,
    formatted_long: string,
    original_currency_code: string
}


export class Money {
    constructor(private client: EtsyApiClient) {

    }


}
