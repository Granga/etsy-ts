import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IReceiptShipment {
    carrier_name: string;
    receipt_shipping_id: number;
    tracking_code: string;
    tracking_url: string;
    buyer_note: string;
    notification_date: number;
}
export declare class ReceiptShipment {
    private client;
    constructor(client: EtsyApiClient);
}
