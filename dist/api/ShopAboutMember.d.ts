export interface IShopAboutMember {
    /**
     * Numeric ID of this ShopAboutMember
     */
    shop_about_member_id: number;
    /**
     * Numeric ID of the associated Shop
     */
    shop_id: number;
    /**
     * The name of this ShopAboutMember
     */
    name: string;
    /**
     * The role of this ShopAboutMember
     */
    role: string;
    /**
     * The bio of this ShopAboutMember
     */
    bio: string;
    /**
     * The order of this member in a list
     */
    rank: number;
    /**
     * Whether this Member is an owner. A Shop can have multiple owners.
     */
    is_owner: boolean;
    /**
     * The url to a thumbnail of the image, exactly 90px by 90px.
     */
    url_90x90: string;
    /**
     * The url to a thumbnail of the image, exactly 190px by 190px.
     */
    url_190x190: string;
    /**
     * Whether the shop member translations need to be updated
     */
    has_stale_translations: boolean;
}
export declare const ShopAboutMember: {};
