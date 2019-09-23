//fields
export interface IMoney {
    /**
     * The amount of money represented by this data.
     */
    amount: number,
    /**
     * The divisor to render the amount
     */
    divisor: number,
    /**
     * The requested locale currency.
     */
    currency_code: string,
    /**
     * The formatted amount without codes or symbols in the requested locale's numeric style, e.g. '10.42'.
     */
    formatted_raw: string,
    /**
     * The formatted amount with a symbol in the requested locale's numeric style, e.g. 'US$10.42'.
     */
    formatted_short: string,
    /**
     * The formatted amount with a symbol and currency in the requested locale's numeric style, e.g. '$10.42 USD'.
     */
    formatted_long: string,
    /**
     @deprecated
     * The original currency code the value was listed in (if the value has been converted).

     Deprecated: Replaced by "before_conversion" (to be removed 15 February 2017).
     */
    original_currency_code: string,
    /**
     * A representation of the value without currency conversion (if conversion has happened).
     */
    before_conversion: any
}

//parameters types


//methods


export const Money = {};
