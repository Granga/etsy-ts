import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
export interface IReceiptShipment {
    /**
     * Shipping carrier name.
     */
    carrier_name: string;
    /**
     * Receipt shipping id used internally
     */
    receipt_shipping_id: number;
    /**
     * Tracking code for carrier.
     */
    tracking_code: string;
    /**
     * Tracking URL for carrier's website.
     */
    tracking_url: string;
    /**
     * Optional note sent to buyer.
     */
    buyer_note: string;
    /**
     * Date the notification was sent.
     */
    notification_date: number;
}
export declare class ReceiptShipment {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
}
