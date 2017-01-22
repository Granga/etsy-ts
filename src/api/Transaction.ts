import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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


export interface IGetShopTransactionParameters extends IStandardParameters {
    transaction_id: number[]
}
export interface IFindAllListingTransactionsParameters extends IStandardParameters {
    listing_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopReceipt2TransactionsParameters extends IStandardParameters {
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

export class Transaction {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a Shop_Transaction by id.
     */
    getShop_Transaction<TResult>(parameters: IGetShopTransactionParameters): Promise<IStandardResponse<IGetShopTransactionParameters, TResult>> {
        return this.client.http<IGetShopTransactionParameters, TResult>("/transactions/:transaction_id", parameters, "GET");
    }

    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    findAllListingTransactions<TResult>(parameters: IFindAllListingTransactionsParameters): Promise<IStandardResponse<IFindAllListingTransactionsParameters, TResult>> {
        return this.client.http<IFindAllListingTransactionsParameters, TResult>("/listings/:listing_id/transactions", parameters, "GET");
    }

    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    findAllShop_Receipt2Transactions<TResult>(parameters: IFindAllShopReceipt2TransactionsParameters): Promise<IStandardResponse<IFindAllShopReceipt2TransactionsParameters, TResult>> {
        return this.client.http<IFindAllShopReceipt2TransactionsParameters, TResult>("/receipts/:receipt_id/transactions", parameters, "GET");
    }

    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    findAllShopTransactions<TResult>(parameters: IFindAllShopTransactionsParameters): Promise<IStandardResponse<IFindAllShopTransactionsParameters, TResult>> {
        return this.client.http<IFindAllShopTransactionsParameters, TResult>("/shops/:shop_id/transactions", parameters, "GET");
    }

    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    findAllUserBuyerTransactions<TResult>(parameters: IFindAllUserBuyerTransactionsParameters): Promise<IStandardResponse<IFindAllUserBuyerTransactionsParameters, TResult>> {
        return this.client.http<IFindAllUserBuyerTransactionsParameters, TResult>("/users/:user_id/transactions", parameters, "GET");
    }
}
