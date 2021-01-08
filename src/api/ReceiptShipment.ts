import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";

//fields
export interface IReceiptShipment {
    /**
     * Shipping carrier name.
     */
    carrier_name: string,
    /**
     * Receipt shipping id used internally
     */
    receipt_shipping_id: number,
    /**
     * Tracking code for carrier.
     */
    tracking_code: string,
    /**
     * Tracking URL for carrier's website.
     */
    tracking_url: string,
    /**
     * Optional note sent to buyer.
     */
    buyer_note: string,
    /**
     * Date the notification was sent.
     */
    notification_date: number
}

//parameters types


//methods class
export class ReceiptShipment {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


}
