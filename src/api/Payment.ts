import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IPayment {
    /**
     * The payment's numeric ID.
     */
    payment_id: number,
    /**
     * The buyer's numeric ID.
     */
    buyer_user_id: number,
    /**
     * The shop's numeric ID.
     */
    shop_id: number,
    /**
     * The receipt's numeric ID.
     */
    receipt_id: number,
    /**
     * The original gross amount of the order, in pennies - this is grand total, including shipping and taxes.
     */
    amount_gross: number,
    /**
     * The original card processing fee of the order in pennies.
     */
    amount_fees: number,
    /**
     * The total value of the payment less fees (amount_gross - amount_fees).
     */
    amount_net: number,
    /**
     * The gross amount which posted to the ledger once shipped. This is equal to the amount_gross UNLESS the seller issues a refund prior to shipping. We consider "shipping" to the event which "posts" to the ledger. Therefore, if the seller refunds first, we simply reduce the amount_gross and post that amount. The seller never sees the refunded amount in their ledger. This is equal to the "Credit" amount in the ledger entry.
     */
    posted_gross: number,
    /**
     * Amount of the fees that posted when shipped. We refund a proportional amount of the fees when a seller refunds a buyer. If they refund prior to shipping, the posted amount will be less then the original.
     */
    posted_fees: number,
    /**
     * The total value of the payment at the time of posting it to the ledger less fees (posted_gross - posted_fees)
     */
    posted_net: number,
    /**
     * If the payment is refunded, partially or fully, this is the new gross amount after the refund.
     */
    adjusted_gross: number,
    /**
     * If the payment is refunded, partially or fully, this is the new fee amount after the refund.
     */
    adjusted_fees: number,
    /**
     * The total value of the payment after refunds less fees (adjusted_gross - adjusted_fees).
     */
    adjusted_net: number,
    /**
     * What currency the payment was made in.
     */
    currency: string,
    /**
     * The currency of the shop.
     */
    shop_currency: string,
    /**
     * The currency of the buyer.
     */
    buyer_currency: string,
    /**
     * The numeric id of the user to which the order is being shipped.
     */
    shipping_user_id: number,
    /**
     * The numeric id identifying the shipping address.
     */
    shipping_address_id: number,
    /**
     * The numeric id identifying the billing address of the buyer.
     */
    billing_address_id: number,
    /**
     * Most commonly "settled" or "authed". Marks the current status of the payment.
     */
    status: string,
    /**
     * The date and time the payment was shipped in Epoch seconds.
     */
    shipped_date: number,
    /**
     * The date and time the payment was created in Epoch seconds.
     */
    create_date: number,
    /**
     * The date and time the payment was last updated in Epoch seconds.
     */
    update_date: number
}

//parameters types
export interface IFindPaymentParameters {
    payment_id: number[]
}

export interface IFindPaymentForLedgerEntryParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

export interface IFindPaymentForPaymentAccountLedgerEntryParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

export interface IFindShopPaymentByReceiptParameters {
    receipt_id: number,
    shop_id: string | number
}

//methods class
export class Payment {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get an Etsy Payments Transaction
     */
    async findPayment<TResult>(
        params: IFindPaymentParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentParameters, TResult>>> {
        return request<IFindPaymentParameters, TResult>(
            {...this.config, url: "/payments/:payment_id", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Get a Payment from a Ledger Entry ID, if applicable
     */
    async findPaymentForLedgerEntry<TResult>(
        params: IFindPaymentForLedgerEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentForLedgerEntryParameters, TResult>>> {
        return request<IFindPaymentForLedgerEntryParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/ledger/entries/:ledger_entry_id/payment",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
     */
    async findPaymentForPaymentAccountLedgerEntry<TResult>(
        params: IFindPaymentForPaymentAccountLedgerEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentForPaymentAccountLedgerEntryParameters, TResult>>> {
        return request<IFindPaymentForPaymentAccountLedgerEntryParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a Payment by Shop Receipt ID
     */
    async findShopPaymentByReceipt<TResult>(
        params: IFindShopPaymentByReceiptParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindShopPaymentByReceiptParameters, TResult>>> {
        return request<IFindShopPaymentByReceiptParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/receipts/:receipt_id/payments",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
