import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface ITransaction {
    /**
     * The numeric ID for this transaction.
     */
    transaction_id: number;
    /**
     * The title of the listing for this transaction.
     */
    title: string;
    /**
     * The description of the listing for this transaction.
     */
    description: string;
    /**
     * The numeric ID for the seller of this transaction.
     */
    seller_user_id: number;
    /**
     * The numeric ID for the buyer of this transaction.
     */
    buyer_user_id: number;
    /**
     * The date and time the transaction was created, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The date and time the transaction was paid, in epoch seconds.
     */
    paid_tsz: number;
    /**
     * The date and time the transaction was shipped, in epoch seconds.
     */
    shipped_tsz: number;
    /**
     * The price of the transaction.
     */
    price: number;
    /**
     * The ISO code (alphabetic) for the seller's native currency.
     */
    currency_code: string;
    /**
     * The quantity of items in this transaction.
     */
    quantity: number;
    /**
     * The tags in the listing for this transaction.
     */
    tags: string[];
    /**
     * The materials in the listing for this transaction.
     */
    materials: string[];
    /**
     * The numeric ID of the primary listing image for this transaction.
     */
    image_listing_id: number;
    /**
     * The numeric ID for the receipt associated to this transaction.
     */
    receipt_id: number;
    /**
     * The shipping cost for this transaction.
     */
    shipping_cost: number;
    /**
     * True if this listing is for a digital download.
     */
    is_digital: boolean;
    /**
     * Written description of the files attached to this digital listing.
     */
    file_data: string;
    /**
     * The numeric ID for this listing associated to this transaction.
     */
    listing_id: number;
    /**
     * True if this transaction was created for an in-person quick sale.
     */
    is_quick_sale: boolean;
    /**
     * The numeric ID of seller's feedback.
     */
    seller_feedback_id: number;
    /**
     * The numeric ID for the buyer's feedback.
     */
    buyer_feedback_id: number;
    /**
     * The type of transaction, usually "listing".
     */
    transaction_type: string;
    /**
     * URL of this transaction
     */
    url: string;
    /**
     * Purchased variations for this transaction.
     */
    variations: any[];
    /**
     * The product data with the purchased item, if any.Please note: you will need the listings_w permission to access SKU data as the seller.
     */
    product_data: any;
}
export interface IGetShopTransactionParameters {
    transaction_id: number[];
}
export interface IFindAllListingTransactionsParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopReceipt2TransactionsParameters {
    receipt_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopTransactionsParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserBuyerTransactionsParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Transaction {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Retrieves a Shop_Transaction by id.
     */
    getShop_Transaction<TResult>(params: IGetShopTransactionParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetShopTransactionParameters, TResult>>>;
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    findAllListingTransactions<TResult>(params: IFindAllListingTransactionsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllListingTransactionsParameters, TResult>>>;
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    findAllShop_Receipt2Transactions<TResult>(params: IFindAllShopReceipt2TransactionsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllShopReceipt2TransactionsParameters, TResult>>>;
    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    findAllShopTransactions<TResult>(params: IFindAllShopTransactionsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllShopTransactionsParameters, TResult>>>;
    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    findAllUserBuyerTransactions<TResult>(params: IFindAllUserBuyerTransactionsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserBuyerTransactionsParameters, TResult>>>;
}
