import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IShopSection {
    shop_section_id: number,
    title: string,
    rank: number,
    user_id: number,
    active_listing_count: number
}


export interface IFindAllShopSectionsParameters extends IStandardParameters {
    shop_id: string | number
}
export interface ICreateShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    title?: string,
    user_id?: number
}
export interface IGetShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number[]
}
export interface IUpdateShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    title?: string,
    user_id?: number
}
export interface IDeleteShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number
}

export class ShopSection {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters): Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>> {
        return this.client.http<IFindAllShopSectionsParameters, TResult>("/shops/:shop_id/sections", parameters, "GET");
    }

    /**
     * Creates a new ShopSection.
     */
    createShopSection<TResult>(parameters: ICreateShopSectionParameters): Promise<IStandardResponse<ICreateShopSectionParameters, TResult>> {
        return this.client.http<ICreateShopSectionParameters, TResult>("/shops/:shop_id/sections", parameters, "POST");
    }

    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection<TResult>(parameters: IGetShopSectionParameters): Promise<IStandardResponse<IGetShopSectionParameters, TResult>> {
        return this.client.http<IGetShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "GET");
    }

    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection<TResult>(parameters: IUpdateShopSectionParameters): Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>> {
        return this.client.http<IUpdateShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT");
    }

    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters): Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>> {
        return this.client.http<IDeleteShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE");
    }
}
