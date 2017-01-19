/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ITransaction {
    transaction_id: number;
    title: string;
    description: string;
    seller_user_id: number;
    buyer_user_id: number;
    creation_tsz: number;
    paid_tsz: number;
    shipped_tsz: number;
    price: number;
    currency_code: string;
    quantity: number;
    tags: string[];
    materials: string[];
    image_listing_id: number;
    receipt_id: number;
    shipping_cost: number;
    is_digital: boolean;
    file_data: string;
    listing_id: number;
    is_quick_sale: boolean;
    seller_feedback_id: number;
    buyer_feedback_id: number;
    transaction_type: string;
    url: string;
    variations: any[];
}
export interface IGetShop_TransactionParameters extends IStandardParameters {
    transaction_id: number[];
}
export interface IFindAllListingTransactionsParameters extends IStandardParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShop_Receipt2TransactionsParameters extends IStandardParameters {
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
export declare function getShop_Transaction<TResult>(parameters: IGetShop_TransactionParameters): Bluebird<IStandardResponse<TResult, IGetShop_TransactionParameters>>;
/**
* Retrieves a set of Transaction objects associated to a Listing.
*/
export declare function findAllListingTransactions<TResult>(parameters: IFindAllListingTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllListingTransactionsParameters>>;
/**
* Retrieves a set of Transaction objects associated to a Shop_Receipt2.
*/
export declare function findAllShop_Receipt2Transactions<TResult>(parameters: IFindAllShop_Receipt2TransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShop_Receipt2TransactionsParameters>>;
/**
* Retrieves a set of Transaction objects associated to a Shop.
*/
export declare function findAllShopTransactions<TResult>(parameters: IFindAllShopTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopTransactionsParameters>>;
/**
* Retrieves a set of Transaction objects associated to a User.
*/
export declare function findAllUserBuyerTransactions<TResult>(parameters: IFindAllUserBuyerTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserBuyerTransactionsParameters>>;
