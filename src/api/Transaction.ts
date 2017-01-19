import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ITransaction {
    transaction_id: number,
    title: string,
    description: string,
    seller_user_id: number,
    buyer_user_id: number,
    creation_tsz: number,
    paid_tsz: number,
    shipped_tsz: number,
    price: number,
    currency_code: string,
    quantity: number,
    tags: string[],
    materials: string[],
    image_listing_id: number,
    receipt_id: number,
    shipping_cost: number,
    is_digital: boolean,
    file_data: string,
    listing_id: number,
    is_quick_sale: boolean,
    seller_feedback_id: number,
    buyer_feedback_id: number,
    transaction_type: string,
    url: string,
    variations: any[]
}

export interface IGetShop_TransactionParameters extends IStandardParameters {
    transaction_id: number[]
}
export interface IFindAllListingTransactionsParameters extends IStandardParameters {
    listing_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShop_Receipt2TransactionsParameters extends IStandardParameters {
    receipt_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopTransactionsParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserBuyerTransactionsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Retrieves a Shop_Transaction by id.
 */
export function getShop_Transaction<TResult>(parameters: IGetShop_TransactionParameters): Bluebird<IStandardResponse<TResult, IGetShop_TransactionParameters>> {
    return request<IStandardResponse<TResult, IGetShop_TransactionParameters>>(parameters, '/transactions/:transaction_id', 'GET');
}
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
export function findAllListingTransactions<TResult>(parameters: IFindAllListingTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllListingTransactionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllListingTransactionsParameters>>(parameters, '/listings/:listing_id/transactions', 'GET');
}
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
export function findAllShop_Receipt2Transactions<TResult>(parameters: IFindAllShop_Receipt2TransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShop_Receipt2TransactionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShop_Receipt2TransactionsParameters>>(parameters, '/receipts/:receipt_id/transactions', 'GET');
}
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
export function findAllShopTransactions<TResult>(parameters: IFindAllShopTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopTransactionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopTransactionsParameters>>(parameters, '/shops/:shop_id/transactions', 'GET');
}
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
export function findAllUserBuyerTransactions<TResult>(parameters: IFindAllUserBuyerTransactionsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserBuyerTransactionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserBuyerTransactionsParameters>>(parameters, '/users/:user_id/transactions', 'GET');
}
