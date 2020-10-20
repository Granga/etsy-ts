export interface ITreasuryListingData {
    /**
     * The numeric ID of the user who posted the item
     */
    user_id: number;
    /**
     * The listing's title
     */
    title: string;
    /**
     * The item's price (private for sold listings)
     */
    price: number;
    /**
     * The ISO (alphabetic) code for the listing's currency
     */
    currency_code: string;
    /**
     * The ID of the listing
     */
    listing_id: number;
    /**
     * Whether the listing is active or not
     */
    state: string;
    /**
     * The shop to which the listing belongs
     */
    shop_name: string;
    /**
     * The ID of the main image of the listing
     */
    image_id: number;
    /**
     * The url to a 75x75 thumbnail of the main image.
     */
    image_url_75x75: string;
    /**
     * The url to a 170x135 thumbnail of the main image.
     */
    image_url_170x135: string;
}
export declare const TreasuryListingData: {};
