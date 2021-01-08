import { AxiosRequestConfig } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";

//fields
export interface IShopAboutImage {
    /**
     * Numeric ID of the shop
     */
    shop_id: number,
    /**
     * Numeric ID of the image record
     */
    image_id: number,
    /**
     * Description of this ShopAboutImage
     */
    caption: string,
    /**
     * The order of this image in a list
     */
    rank: number,
    /**
     * The url to a thumbnail of the image, exactly 178px by 178px.
     */
    url_178x178: string,
    /**
     * The url to a thumbnail of the image, no more than 545px width by variable height.
     */
    url_545xN: string,
    /**
     * The url to a thumbnail of the image, no more than 760px width by variable height.
     */
    url_760xN: string,
    /**
     * The url to the full-size image, no more than 1500px width by variable height.
     */
    url_fullxfull: string
}

//parameters types


//methods class
export class ShopAboutImage {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


}
