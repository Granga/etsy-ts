import { request } from "../client/client";
//methods class
export class PaymentAdjustmentItem {
    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    static findPaymentAdjustmentItems(parameters, options) {
        return request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
    }
    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    static findPaymentAdjustmentItem(parameters, options) {
        return request("/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id", parameters, "GET", options);
    }
}
