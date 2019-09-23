import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export interface IGetShopTransactionParameters extends IStandardParameters {
    transaction_id: number[];
}
export interface IFindAllListingTransactionsParameters extends IStandardParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopReceipt2TransactionsParameters extends IStandardParameters {
    receipt_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopTransactionsParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserBuyerTransactionsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
 * Retrieves a Shop_Transaction by id.
 */
declare function getShop_Transaction<TResult>(parameters: IGetShopTransactionParameters, options?: IOptions): Promise<IStandardResponse<IGetShopTransactionParameters, TResult>>;
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
declare function findAllListingTransactions<TResult>(parameters: IFindAllListingTransactionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingTransactionsParameters, TResult>>;
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
declare function findAllShop_Receipt2Transactions<TResult>(parameters: IFindAllShopReceipt2TransactionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopReceipt2TransactionsParameters, TResult>>;
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
declare function findAllShopTransactions<TResult>(parameters: IFindAllShopTransactionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopTransactionsParameters, TResult>>;
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
declare function findAllUserBuyerTransactions<TResult>(parameters: IFindAllUserBuyerTransactionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserBuyerTransactionsParameters, TResult>>;
export declare const Transaction: {
    getShop_Transaction: typeof getShop_Transaction;
    findAllListingTransactions: typeof findAllListingTransactions;
    findAllShop_Receipt2Transactions: typeof findAllShop_Receipt2Transactions;
    findAllShopTransactions: typeof findAllShopTransactions;
    findAllUserBuyerTransactions: typeof findAllUserBuyerTransactions;
};
export {};
