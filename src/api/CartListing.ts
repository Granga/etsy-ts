import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";

//fields
export interface ICartListing {
    /**
     * The numeric ID of the listing
     */
    listing_id: number,
    /**
     * The quantity of the listing being purchased
     */
    purchase_quantity: number,
    /**
     * The purchase state of the listing, possible values: valid, invalid_quantity, invalid_shipping, not_active, edited, invalid_currency, invalid_shipping_currency
     */
    purchase_state: string,
    /**
     * True if this listing is for a digital download.
     */
    is_digital: boolean,
    /**
     * Written description of the files attached to this digital listing.
     */
    file_data: string,
    /**
     * When Variations are present on a listing, this can be used to differentiate multiple instances of the same listing.
     */
    listing_customization_id: number,
    /**
     * Whether Variations are available for this listing.
     */
    variations_available: boolean,
    /**
     * Whether the buyer selected Variations for this listing.
     */
    has_variations: boolean,
    /**
     * An array of selected Variations for this listing.
     */
    selected_variations: any[]
}

//parameters types


//methods class
export class CartListing {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


}
