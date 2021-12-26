/**
 * A listing from a shop, which contains a product quantity, title, description, price, etc.
 */
export interface IShopListing {
  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listing_id: number;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) posting the listing.
   * @min 1
   */
  user_id: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shop_id: number;

  /** The listing's title string. Valid title strings contain only letters, numbers, punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®. (regex: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u) You can only use the %, :, & and + characters once each. */
  title: string;

  /** A description string of the product for sale in the listing. */
  description: string;

  /** An enumerated string from any of: active or inactive. Note: Setting a draft listing to active will also publish the listing on etsy.com. Setting a sold out listing to active will update the quantity to 1 and renew the listing on etsy.com. */
  state: "active" | "inactive" | "sold_out" | "draft" | "expired";

  /**
   * The listing\'s creation time, in epoch seconds.
   * @min 946684800
   */
  creation_timestamp: number;

  /**
   * The listing\'s expiration time, in epoch seconds.
   * @min 946684800
   */
  ending_timestamp: number;

  /**
   * The listing\'s creation time, in epoch seconds.
   * @min 946684800
   */
  original_creation_timestamp: number;

  /**
   * The time of the last update to the listing, in epoch seconds.
   * @min 946684800
   */
  last_modified_timestamp: number;

  /**
   * The date and time of the last state change of this listing.
   * @min 946684800
   */
  state_timestamp: number;

  /**
   * The positive non-zero number of products available for purchase in the listing. Note: The listing quantity is the sum of available offering quantities. You can request the quantities for individual offerings from the ListingInventory resource using the [getListingInventory](/documentation/reference#operation/getListingInventory) endpoint.
   * @min 0
   */
  quantity: number;

  /**
   * The numeric ID of a section in a specific Etsy shop.
   * @min 1
   */
  shop_section_id: number | null;

  /** The positive non-zero numeric position in the featured listings of the shop, with rank 1 listings appearing in the left-most position in featured listing on a shop’s home page. */
  featured_rank: number;

  /** The full URL to the listing's page on Etsy. */
  url: string;

  /**
   * The number of users who marked this Listing a favorite.
   * @min 0
   */
  num_favorers: number;

  /** When true, applicable [shop](/documentation/reference#tag/Shop) tax rates do not apply to this listing at checkout. */
  non_taxable: boolean;

  /** When true, a buyer may contact the seller for a customized order. The default value is true when a shop accepts custom orders. Does not apply to shops that do not accept custom orders. */
  is_customizable: boolean;

  /** When true, this listing is personalizable. The default value is null. */
  is_personalizable: boolean;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_is_required: boolean;

  /** This an integer value representing the maximum length for the personalization message entered by the buyer. */
  personalization_char_count_max: number | null;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_instructions: string | null;

  /** An enumerated type string that indicates whether the listing is physical or a digital download. */
  listing_type: boolean;

  /** A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u) Default value is null. */
  tags: string[];

  /** A list of material strings for materials used in the product. Valid materials strings contain only letters, numbers, and whitespace characters. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}]/u) Default value is null. */
  materials: string[];

  /**
   * The numeric ID of the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing. Required when listing type=physical.
   * @min 1
   */
  shipping_profile_id: number | null;

  /**
   * The minimum number of days required to process this listing. Default value is null.
   * @min 0
   */
  processing_min: number | null;

  /**
   * The maximum number of days required to process this listing. Default value is null.
   * @min 0
   */
  processing_max: number | null;

  /** An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading. Requires 'is_supply' and 'when_made'. */
  who_made: "i_did" | "someone_else" | "collective" | null;

  /** An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading. Requires 'is_supply' and 'who_made'. */
  when_made:
    | "made_to_order"
    | "2020_2021"
    | "2010_2019"
    | "2002_2009"
    | "before_2002"
    | "2000_2001"
    | "1990s"
    | "1980s"
    | "1970s"
    | "1960s"
    | "1950s"
    | "1940s"
    | "1930s"
    | "1920s"
    | "1910s"
    | "1900s"
    | "1800s"
    | "1700s"
    | "before_1700"
    | null;

  /** When true, tags the listing as a supply product, else indicates that it's a finished product. Helps buyers locate the listing under the Supplies heading. Requires 'who_made' and 'when_made'. */
  is_supply: boolean | null;

  /**
   * The numeric weight of the product measured in units set in \'item_weight_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_weight: number | null;

  /** A string defining the units used to measure the weight of the product. Default value is null. */
  item_weight_unit: "oz" | "lb" | "g" | "kg" | null;

  /**
   * The numeric length of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_length: number | null;

  /**
   * The numeric width of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_width: number | null;

  /**
   * The numeric length of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_height: number | null;

  /** A string defining the units used to measure the dimensions of the product. Default value is null. */
  item_dimensions_unit: "in" | "ft" | "mm" | "cm" | "m" | "yd" | "inches" | null;

  /** When true, this is a private listing intendend for a specific buyer and hidden from shop view. */
  is_private: boolean;

  /** An array of style strings for this listing, each of which is free-form text string such as \"Formal\", or \"Steampunk\". A Listing may have up to two styles. Valid style strings contain only letters, numbers, and whitespace characters. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}]/u) Default value is null. */
  style: string[];

  /** A string describing the files attached to a digital listing. */
  file_data: string;

  /** When true, the listing has variations. */
  has_variations: boolean;

  /** When true, renews a listing for four months upon expriation. If set to true when previously false, etsy.com renews the listing before it expires, but the renewal period starts immidiately rather than extending the listing's expiration date. Any unused time remaining on the listing is lost. Renewals result in charges to a user's bill. */
  should_auto_renew: boolean;

  /** The IETF language tag for the default language of the listing. Ex: `de`, `en`, `es`, `fr`, `it`, `ja`, `nl`, `pl`, `pt`, `ru`. */
  language: string | null;

  /** The positive non-zero price of the product. (Sold product listings are private) Note: The price is the minimum possible price. The getInventory method requests exact prices for available offerings. */
  price: IMoney;

  /** The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop.  [See SellerTaxonomy](/documentation/reference#tag/SellerTaxonomy) for more information. */
  taxonomy_id: number | null;
}

/**
 * A representation of an amount of money.
 */
export interface IMoney {
  /** The amount of represented by this data. */
  amount: number;

  /**
   * The divisor to render the amount.
   * @min 0
   */
  divisor: number;

  /** The ISO currency code for this data. */
  currency_code: string;
}

export interface IErrorSchema {
  error: string;
}

/**
 * A file associated with a digital listing.
 */
export interface IShopListingFile {
  /**
   * The unique numeric ID of a file associated with a digital listing.
   * @min 1
   */
  listing_file_id: number;

  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listing_id: number;

  /**
   * The numeric index of the display order position of this file in the listing, starting at 1.
   * @min 0
   */
  rank: number;

  /** The file name string for a file associated with a digital listing. */
  filename: string;

  /** A human-readable format size string for the size of a file. */
  filesize: string;

  /**
   * A number indicating the size of a file, measured in bytes.
   * @min 0
   */
  size_bytes: number;

  /** A type string indicating a file's MIME type. */
  filetype: string;

  /**
   * The unique numeric ID of a file associated with a digital listing.
   * @min 946684800
   */
  create_timestamp: number;
}

/**
 * Represents several ShopListingFiles.
 */
export interface IShopListingFiles {
  /**
   * The number of ShopListingFiles being returned..
   * @min 0
   */
  count: number;

  /** An array of ShopListingFile resources. */
  results: IShopListingFile[];
}

/**
 * A set of ShopListing resources.
 */
export interface IShopListings {
  /**
   * The number of ShopListing resources found.
   * @min 0
   */
  count: number;

  /** The ShopListing resources found. */
  results: IShopListing[];
}

/**
 * A listing from a shop, which contains a product quantity, title, description, price, etc. and additional fields which represent associations.
 */
export interface IShopListingWithAssociations {
  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listing_id: number;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) posting the listing.
   * @min 1
   */
  user_id: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shop_id: number;

  /** The listing's title string. Valid title strings contain only letters, numbers, punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®. (regex: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u) You can only use the %, :, & and + characters once each. */
  title: string;

  /** A description string of the product for sale in the listing. */
  description: string;

  /** An enumerated string from any of: active or inactive. Note: Setting a draft listing to active will also publish the listing on etsy.com. Setting a sold out listing to active will update the quantity to 1 and renew the listing on etsy.com. */
  state: "active" | "inactive" | "sold_out" | "draft" | "expired";

  /**
   * The listing\'s creation time, in epoch seconds.
   * @min 946684800
   */
  creation_timestamp: number;

  /**
   * The listing\'s expiration time, in epoch seconds.
   * @min 946684800
   */
  ending_timestamp: number;

  /**
   * The listing\'s creation time, in epoch seconds.
   * @min 946684800
   */
  original_creation_timestamp: number;

  /**
   * The time of the last update to the listing, in epoch seconds.
   * @min 946684800
   */
  last_modified_timestamp: number;

  /**
   * The date and time of the last state change of this listing.
   * @min 946684800
   */
  state_timestamp: number;

  /**
   * The positive non-zero number of products available for purchase in the listing. Note: The listing quantity is the sum of available offering quantities. You can request the quantities for individual offerings from the ListingInventory resource using the [getListingInventory](/documentation/reference#operation/getListingInventory) endpoint.
   * @min 0
   */
  quantity: number;

  /**
   * The numeric ID of a section in a specific Etsy shop.
   * @min 1
   */
  shop_section_id: number | null;

  /** The positive non-zero numeric position in the featured listings of the shop, with rank 1 listings appearing in the left-most position in featured listing on a shop’s home page. */
  featured_rank: number;

  /** The full URL to the listing's page on Etsy. */
  url: string;

  /**
   * The number of users who marked this Listing a favorite.
   * @min 0
   */
  num_favorers: number;

  /** When true, applicable [shop](/documentation/reference#tag/Shop) tax rates do not apply to this listing at checkout. */
  non_taxable: boolean;

  /** When true, a buyer may contact the seller for a customized order. The default value is true when a shop accepts custom orders. Does not apply to shops that do not accept custom orders. */
  is_customizable: boolean;

  /** When true, this listing is personalizable. The default value is null. */
  is_personalizable: boolean;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_is_required: boolean;

  /** This an integer value representing the maximum length for the personalization message entered by the buyer. */
  personalization_char_count_max: number | null;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_instructions: string | null;

  /** An enumerated type string that indicates whether the listing is physical or a digital download. */
  listing_type: boolean;

  /** A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u) Default value is null. */
  tags: string[];

  /** A list of material strings for materials used in the product. Valid materials strings contain only letters, numbers, and whitespace characters. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}]/u) Default value is null. */
  materials: string[];

  /**
   * The numeric ID of the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing. Required when listing type=physical.
   * @min 1
   */
  shipping_profile_id: number | null;

  /**
   * The minimum number of days required to process this listing. Default value is null.
   * @min 0
   */
  processing_min: number | null;

  /**
   * The maximum number of days required to process this listing. Default value is null.
   * @min 0
   */
  processing_max: number | null;

  /** An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading. Requires 'is_supply' and 'when_made'. */
  who_made: "i_did" | "someone_else" | "collective" | null;

  /** An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading. Requires 'is_supply' and 'who_made'. */
  when_made:
    | "made_to_order"
    | "2020_2021"
    | "2010_2019"
    | "2002_2009"
    | "before_2002"
    | "2000_2001"
    | "1990s"
    | "1980s"
    | "1970s"
    | "1960s"
    | "1950s"
    | "1940s"
    | "1930s"
    | "1920s"
    | "1910s"
    | "1900s"
    | "1800s"
    | "1700s"
    | "before_1700"
    | null;

  /** When true, tags the listing as a supply product, else indicates that it's a finished product. Helps buyers locate the listing under the Supplies heading. Requires 'who_made' and 'when_made'. */
  is_supply: boolean | null;

  /**
   * The numeric weight of the product measured in units set in \'item_weight_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_weight: number | null;

  /** A string defining the units used to measure the weight of the product. Default value is null. */
  item_weight_unit: "oz" | "lb" | "g" | "kg" | null;

  /**
   * The numeric length of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_length: number | null;

  /**
   * The numeric width of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_width: number | null;

  /**
   * The numeric length of the product measured in units set in \'item_dimensions_unit\'. Default value is null. If set, the value must be greater than 0.
   * @format float
   */
  item_height: number | null;

  /** A string defining the units used to measure the dimensions of the product. Default value is null. */
  item_dimensions_unit: "in" | "ft" | "mm" | "cm" | "m" | "yd" | "inches" | null;

  /** When true, this is a private listing intendend for a specific buyer and hidden from shop view. */
  is_private: boolean;

  /** An array of style strings for this listing, each of which is free-form text string such as \"Formal\", or \"Steampunk\". A Listing may have up to two styles. Valid style strings contain only letters, numbers, and whitespace characters. (regex: /[^\\p{L}\\p{Nd}\\p{Zs}]/u) Default value is null. */
  style: string[];

  /** A string describing the files attached to a digital listing. */
  file_data: string;

  /** When true, the listing has variations. */
  has_variations: boolean;

  /** When true, renews a listing for four months upon expriation. If set to true when previously false, etsy.com renews the listing before it expires, but the renewal period starts immidiately rather than extending the listing's expiration date. Any unused time remaining on the listing is lost. Renewals result in charges to a user's bill. */
  should_auto_renew: boolean;

  /** The IETF language tag for the default language of the listing. Ex: `de`, `en`, `es`, `fr`, `it`, `ja`, `nl`, `pl`, `pt`, `ru`. */
  language: string | null;

  /** The positive non-zero price of the product. (Sold product listings are private) Note: The price is the minimum possible price. The getInventory method requests exact prices for available offerings. */
  price: IMoney;

  /** The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop.  [See SellerTaxonomy](/documentation/reference#tag/SellerTaxonomy) for more information. */
  taxonomy_id: number | null;

  /** An array of data representing the shipping profile resource. */
  shipping_profile: IShopShippingProfile;

  /** Represents a single user of the site */
  user: IUser;

  /** A shop created by an Etsy user. */
  shop: IShop;

  /** Represents a list of listing image resources, each of which contains the reference URLs and metadata for an image */
  images: IListingImage[];

  /** Represents a list of production partners for a shop. */
  production_partners: IShopProductionPartner[];

  /** A list of SKU strings for the listing. SKUs will only appear if the requesting user owns the shop. */
  skus: string[] | null;
}

/**
 * Represents a profile used to set a listing's shipping information. Please note that it's not possible to create calculated shipping templates via the API. However, you can associate calculated shipping profiles created from Shop Manager with listings using the API.
 */
export interface IShopShippingProfile {
  /**
   * The numeric ID of the shipping profile.
   * @min 1
   */
  shipping_profile_id: number;

  /** The name string of this shipping profile. */
  title: string | null;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) who owns the shipping profile.
   * @min 1
   */
  user_id: number;

  /**
   * The minimum number of days for processing the listing.
   * @min 0
   */
  min_processing_days: number | null;

  /**
   * The maximum number of days for processing the listing.
   * @min 0
   */
  max_processing_days: number | null;

  /** Translated display label string for processing days. */
  processing_days_display_label: string;

  /**
   * The ISO code of the country from which the listing ships.
   * @format ISO 3166-1 alpha-2
   */
  origin_country_iso: string;

  /** When true, someone deleted this shipping profile. */
  is_deleted: boolean;

  /** A list of [shipping profile destinations](/documentation/reference#operation/createListingShippingProfileDestination) available for this shipping profile. */
  shipping_profile_destinations: IShopShippingProfileDestination[];

  /** A list of [shipping profile upgrades](/documentation/reference#operation/createListingShippingProfileUpgrade) available for this shipping profile. */
  shipping_profile_upgrades: IShopShippingProfileUpgrade[];

  /** The postal code string (not necessarily a number) for the location from which the listing ships. */
  origin_postal_code: string | null;
  profile_type?: "manual" | "calculated";
}

/**
 * Represents a shipping destination assigned to a shipping profile.
 */
export interface IShopShippingProfileDestination {
  /**
   * The numeric ID of the shipping profile destination in the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing.
   * @min 1
   */
  shipping_profile_destination_id: number;

  /**
   * The numeric ID of the shipping profile.
   * @min 1
   */
  shipping_profile_id: number;

  /**
   * The ISO code of the country from which the listing ships.
   * @format ISO 3166-1 alpha-2
   */
  origin_country_iso: string;

  /** The ISO code of the country to which the listing ships. If null, request sets destination to destination_region */
  destination_country_iso: string;

  /** The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU). If \`none\", request sets destination to destination_country_iso, or \"everywhere\" if destination_country_iso is also null */
  destination_region: "eu" | "non_eu" | "none";

  /** The cost of shipping to this country/region alone, measured in the store's default currency. */
  primary_cost: IMoney;

  /** The cost of shipping to this country/region with another item, measured in the store's default currency. */
  secondary_cost: IMoney;

  /** The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date. */
  shipping_carrier_id: number | null;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class: string | null;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days: number | null;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days: number | null;
}

/**
 * A representation of a shipping profile upgrade option.
 */
export interface IShopShippingProfileUpgrade {
  /**
   * The numeric ID of the base shipping profile.
   * @min 1
   */
  shipping_profile_id: number;

  /**
   * The numeric ID that is associated with a shipping upgrade
   * @min 1
   */
  upgrade_id: number;

  /** Name for the shipping upgrade shown to shoppers at checkout, e.g. USPS Priority. */
  upgrade_name: string;

  /** The type of the shipping upgrade. Domestic (0) or international (1). */
  type: "0" | "1";

  /**
   * The positive non-zero numeric position in the images displayed in a listing, with rank 1 images appearing in the left-most position in a listing.
   * @min 0
   */
  rank: number;

  /** The IETF language tag for the language of the shipping profile. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru. */
  language: string;

  /** Additional cost of adding the shipping upgrade. */
  price: IMoney;

  /** Additional cost of adding the shipping upgrade for each additional item. */
  secondary_price: IMoney;

  /** The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date. */
  shipping_carrier_id: number | null;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class: string | null;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days: number | null;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days: number | null;
}

/**
 * Represents a single user of the site
 */
export interface IUser {
  /**
   * The numeric ID of a user. This number is also a valid shop ID for the user\'s shop.
   * @min 1
   */
  user_id: number;

  /** The user\'s login name string. */
  login_name: string;

  /**
   * An email address string for the user\'s primary email address.
   * @format email
   */
  primary_email: string | null;

  /** The user\'s first name. */
  first_name: string | null;

  /** The user\'s last name. */
  last_name: string | null;

  /**
   * The date and time the user created their account, in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The numeric ID of the user who referred this user.
   * @min 1
   */
  referred_by_user_id: number | null;

  /** Deprecated. Always true. */
  use_new_inventory_endpoints: boolean;

  /** True if the user is seller. */
  is_seller: boolean;

  /** The user\'s biography. */
  bio: string | null;

  /** The user\'s gender. */
  gender: string | null;

  /** The user\'s month of birth. */
  birth_month: string | null;

  /** The user\'s day of birth. */
  birth_day: string | null;

  /**
   * The number of transactions where the user has bought.
   * @min 0
   */
  transaction_buy_count: number | null;

  /**
   * The number of transactions where the user has sold.
   * @min 0
   */
  transaction_sold_count: number | null;
}

/**
 * A shop created by an Etsy user.
 */
export interface IShop {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shop_id: number;

  /**
   * The numeric user ID of the [user](/documentation/reference#tag/User) who owns this shop.
   * @min 1
   */
  user_id: number;

  /** The shop's name string. */
  shop_name: string;

  /**
   * The date and time this shop was created, in epoch seconds.
   * @min 0
   */
  create_date: number;

  /** A brief heading string for the shop\'s main page. */
  title: string | null;

  /** An announcement string to buyers that displays on the shop's homepage. */
  announcement: string | null;

  /** The ISO (alphabetic) code for the shop's currency. The shop displays all prices in this currency by default. */
  currency_code: string;

  /** When true, this shop is not accepting purchases. */
  is_vacation: boolean;

  /** The shop's message string displayed when is_vacation is true. */
  vacation_message: string | null;

  /** A message string sent to users who complete a purchase from this shop. */
  sale_message: string | null;

  /** A message string sent to users who purchase a digital item from this shop. */
  digital_sale_message: string | null;

  /**
   * The date and time of the last update to the shop, in epoch seconds.
   * @min 0
   */
  update_date: number;

  /**
   * The number of active listings in the shop.
   * @min 0
   */
  listing_active_count: number;

  /**
   * The number of digital listings in the shop.
   * @min 0
   */
  digital_listing_count: number;

  /** The shop owner\'s login name string. */
  login_name: string;

  /** When true, the shop accepts customization requests. */
  accepts_custom_requests: boolean;

  /** The shop's policy welcome string (may be blank). */
  policy_welcome: string | null;

  /** The shop's payment policy string (may be blank). */
  policy_payment: string | null;

  /** The shop's shipping policy string (may be blank). */
  policy_shipping: string | null;

  /** The shop's refund policy string (may be blank). */
  policy_refunds: string | null;

  /** The shop's additional policies string (may be blank). */
  policy_additional: string | null;

  /** The shop's seller infomation string (may be blank). */
  policy_seller_info: string | null;

  /**
   * The date and time of the last update to the shop's policies, in epoch seconds.
   * @min 0
   */
  policy_update_date: number;

  /** When true, EU receipts display private info. */
  policy_has_private_receipt_info: boolean;

  /** When true, the shop displays additional unstructured policy fields. */
  has_unstructured_policies: boolean;

  /** The shop's privacy policy string (may be blank). */
  policy_privacy: string | null;

  /** The shop's automatic reply string displayed in new conversations when is_vacation is true. */
  vacation_autoreply: string | null;

  /** The URL string for this shop. */
  url: string;

  /** The URL string for this shop's banner image. */
  image_url_760x100: string | null;

  /**
   * The number of users who marked this shop a favorite.
   * @min 0
   */
  num_favorers: number;

  /** A list of language strings for the shop's enrolled languages. */
  languages: string[];

  /** The URL string for this shop's icon image. */
  icon_url_fullxfull: string | null;

  /** When true, the shop accepted using structured policies. */
  is_using_structured_policies: boolean;

  /** When true, the shop accepted OR declined after viewing structured policies onboarding. */
  has_onboarded_structured_policies: boolean;

  /** When true, this shop\'s policies include a link to an EU online dispute form. */
  include_dispute_form_link: boolean;

  /** (**DEPRECATED: Replaced by _is_etsy_payments_onboarded._) When true, the shop has onboarded onto Etsy Payments. */
  is_direct_checkout_onboarded: boolean;

  /** When true, the shop has onboarded onto Etsy Payments. */
  is_etsy_payments_onboarded: boolean;

  /** When true, the shop is elegible for calculated shipping profiles. (Only available in the US and Canada) */
  is_calculated_eligible: boolean;

  /** When true, the shop opted in to buyer promise. */
  is_opted_in_to_buyer_promise: boolean;

  /** When true, the shop is based in the US. */
  is_shop_us_based: boolean;

  /**
   * The total number of sales ([transactions](/documentation/reference#tag/Shop-Receipt-Transactions)) for this shop
   * @min 0
   */
  transaction_sold_count: number;

  /**
   * The country iso the shop is shipping from.
   * @format ISO 3166-1 alpha-2
   */
  shipping_from_country_iso: string | null;

  /**
   * The country iso where the shop is located.
   * @format ISO 3166-1 alpha-2
   */
  shop_location_country_iso: string | null;

  /** Number of reviews of shop listings in the past year. */
  review_count: number | null;

  /**
   * Average rating based on reviews of shop listings in the past year.
   * @format float
   */
  review_average: number | null;
}

/**
 * Reference urls and metadata for an image associated with a specific listing. The `url_fullxfull` parameter contains the URL for full-sized binary image file.
 */
export interface IListingImage {
  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listing_id: number;

  /**
   * The numeric ID of the primary [listing image](/documentation/reference#tag/ShopListing-Image) for this transaction.
   * @min 1
   */
  listing_image_id: number;

  /** The webhex string for the image's average color, in webhex notation. */
  hex_code: string | null;

  /**
   * The numeric red value equal to the image's average red value, from 0-255 (RGB color).
   * @min 0
   */
  red: number | null;

  /**
   * The numeric red value equal to the image's average red value, from 0-255 (RGB color).
   * @min 0
   */
  green: number | null;

  /**
   * The numeric red value equal to the image's average red value, from 0-255 (RGB color).
   * @min 0
   */
  blue: number | null;

  /**
   * The numeric hue equal to the image's average hue, from 0-360 (HSV color).
   * @min 0
   */
  hue: number | null;

  /**
   * The numeric saturation equal to the image's average saturation, from 0-100 (HSV color).
   * @min 0
   */
  saturation: number | null;

  /**
   * The numeric brightness equal to the image's average brightness, from 0-100 (HSV color).
   * @min 0
   */
  brightness: number | null;

  /** When true, the image is in black & white. */
  is_black_and_white: boolean | null;

  /**
   * The listing image\'s creation time, in epoch seconds.
   * @min 0
   */
  creation_tsz: number;

  /**
   * The positive non-zero numeric position in the images displayed in a listing, with rank 1 images appearing in the left-most position in a listing.
   * @min 0
   */
  rank: number;

  /** The url string for a 75x75 pixel thumbnail of the image. */
  url_75x75: string;

  /** The url string for a 170x135 pixel thumbnail of the image. */
  url_170x135: string;

  /** The url string for a thumbnail of the image, no more than 570 pixels wide with variable height. */
  url_570xN: string;

  /** The url string for the full-size image, up to 3000 pixels in each dimension. */
  url_fullxfull: string;

  /**
   * The numeric height, measured in pixels, of the full-sized image referenced in url_fullxfull.
   * @min 0
   */
  full_height: number | null;

  /**
   * The numeric width, measured in pixels, of the full-sized image referenced in url_fullxfull.
   * @min 0
   */
  full_width: number | null;
}

/**
 * Represents a description of a shop production partner.
 */
export interface IShopProductionPartner {
  /**
   * The numeric ID of a production partner.
   * @min 1
   */
  production_partner_id: number;

  /** The name or title of the production partner. */
  partner_name: string;

  /** A string representing the production partner location. */
  location: string;
}

/**
 * Represents a list of listing image resources, each of which contains the reference URLs and metadata for an image.
 */
export interface IListingImages {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: IListingImage[];
}

/**
 * A representation of a single listing's inventory record with associations
 */
export interface IListingInventoryWithAssociations {
  /** A JSON array of products available in a listing, even if only one product. All field names in the JSON blobs are lowercase. */
  products: IListingInventoryProduct[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change product prices, if any. For example, if you charge specific prices for different sized products in the same listing, then this array contains the property ID for size. */
  price_on_property: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the quantity of the products, if any. For example, if you stock specific quantities of different colored products in the same listing, then this array contains the property ID for color. */
  quantity_on_property: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the product SKU, if any. For example, if you use specific skus for different colored products in the same listing, then this array contains the property ID for color. */
  sku_on_property: number[];

  /** An enumerated string that attaches an valid association. Default value is null. */
  listing: IShopListing;
}

/**
 * A representation of a product for a listing.
 */
export interface IListingInventoryProduct {
  /**
   * The numeric ID for a specific [product](/documentation/reference#tag/ShopListing-Product) purchased from a listing.
   * @min 1
   */
  product_id: number;

  /** The SKU string for the product */
  sku: string;

  /** When true, someone deleted this product. */
  is_deleted: boolean;

  /** A list of product offering entries for this product. */
  offerings: IListingInventoryProductOffering[];

  /** A list of property value entries for this product. */
  property_values: IListingPropertyValue[];
}

/**
 * A representation of an offering for a listing.
 */
export interface IListingInventoryProductOffering {
  /**
   * The ID for the ProductOffering
   * @min 1
   */
  offering_id: number;

  /**
   * The quantity the ProductOffering
   * @min 0
   */
  quantity: number;

  /** Whether or not the offering can be shown to buyers. */
  is_enabled: boolean;

  /** Whether or not the offering has been deleted. */
  is_deleted: boolean;

  /** Price data for this ProductOffering */
  price: IMoney;
}

/**
 * A representation of structured data values.
 */
export interface IListingPropertyValue {
  /**
   * The numeric ID of the Property.
   * @min 1
   */
  property_id: number;

  /** The name of the Property. */
  property_name: string | null;

  /**
   * The numeric ID of the scale (if any).
   * @min 1
   */
  scale_id: number | null;

  /** The label used to describe the chosen scale (if any). */
  scale_name: string | null;

  /** The numeric IDs of the Property values */
  value_ids: number[];

  /** The Property values */
  values: string[];
}

/**
 * A representation of a single listing's inventory record.
 */
export interface IListingInventory {
  /** A JSON array of products available in a listing, even if only one product. All field names in the JSON blobs are lowercase. */
  products: IListingInventoryProduct[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change product prices, if any. For example, if you charge specific prices for different sized products in the same listing, then this array contains the property ID for size. */
  price_on_property: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the quantity of the products, if any. For example, if you stock specific quantities of different colored products in the same listing, then this array contains the property ID for color. */
  quantity_on_property: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the product SKU, if any. For example, if you use specific skus for different colored products in the same listing, then this array contains the property ID for color. */
  sku_on_property: number[];
}

/**
 * A set of ShopListing resources with associations.
 */
export interface IShopListingsWithAssociations {
  /**
   * The number of ShopListing resources found.
   * @min 0
   */
  count: number;

  /** The ShopListing resources found. */
  results: IShopListing[];
}

/**
 * Represents several ListingPropertyValues.
 */
export interface IListingPropertyValues {
  /** @min 0 */
  count: number;
  results: IListingPropertyValue[];
}

/**
 * A set of ShopReceiptTransaction resources
 */
export interface IShopReceiptTransactions {
  /** The number of ShopReceiptTransaction resources found. */
  count: number;

  /** The ShopReceiptTransaction resources found. */
  results: IShopReceiptTransaction[];
}

/**
 * A transaction object associated with a shop receipt. Etsy generates one transaction per listing purchased as recorded on the order receipt.
 */
export interface IShopReceiptTransaction {
  /**
   * The unique numeric ID for a transaction.
   * @min 1
   */
  transaction_id: number;

  /** The title string of the [listing](/documentation/reference#tag/ShopListing) purchased in this transaction. */
  title: string;

  /** The description string of the [listing](/documentation/reference#tag/ShopListing) purchased in this transaction. */
  description: string | null;

  /**
   * The numeric user ID for the seller in this transaction.
   * @min 1
   */
  seller_user_id: number;

  /**
   * The numeric user ID for the buyer in this transaction.
   * @min 1
   */
  buyer_user_id: number;

  /**
   * The transaction\'s creation date and time, in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The transaction\'s paid date and time, in epoch seconds.
   * @min 946684800
   */
  paid_timestamp: number | null;

  /**
   * The transaction\'s shipping date and time, in epoch seconds.
   * @min 946684800
   */
  shipped_timestamp: number | null;

  /**
   * The numeric quantity of products purchased in this transaction.
   * @min 0
   */
  quantity: number;

  /**
   * The numeric ID of the primary [listing image](/documentation/reference#tag/ShopListing-Image) for this transaction.
   * @min 1
   */
  listing_image_id: number | null;

  /**
   * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
   * @min 1
   */
  receipt_id: number;

  /** When true, the transaction recorded the purchase of a digital listing. */
  is_digital: boolean;

  /** A string describing the files purchased in this transaction. */
  file_data: string;

  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 0
   */
  listing_id: number | null;

  /** The type string for the transaction, usually "listing" */
  transaction_type: string;

  /**
   * The numeric ID for a specific [product](/documentation/reference#tag/ShopListing-Product) purchased from a listing.
   * @min 1
   */
  product_id: number | null;

  /** The SKU string for the product */
  sku: string | null;

  /** A money object representing the price recorded the transaction. */
  price: IMoney;

  /** A money object representing the shipping cost for this transaction. */
  shipping_cost: IMoney;

  /** Array of variations and personalizations the buyer chose. */
  variations: ITransactionVariations[];

  /**
   * The ID of the shipping profile selected for this listing.
   * @min 1
   */
  shipping_profile_id: number | null;

  /**
   * The minimum number of days for processing the listing.
   * @min 1
   */
  min_processing_days: number | null;

  /**
   * The maximum number of days for processing the listing.
   * @min 1
   */
  max_processing_days: number | null;

  /** Name of the selected shipping method. */
  shipping_method: string | null;

  /** The name of the shipping upgrade selected for this listing. Default value is null. */
  shipping_upgrade: string | null;

  /**
   * The date & time of the expected ship date, in epoch seconds.
   * @min 946684800
   */
  expected_ship_date: number | null;
}

/**
 * A list of variations chosen by the buyer during checkout.
 */
export interface ITransactionVariations {
  /** The variation property ID. */
  property_id: number;

  /** The ID of the variation value selected. */
  value_id: number | null;

  /** Formatted name of the variation. */
  formatted_name: string;

  /** Value of the variation entered by the buyer. */
  formatted_value: string;
}

/**
 * Represents the translation data for a Listing.
 */
export interface IListingTranslation {
  /**
   * The numeric ID for the Listing.
   * @min 1
   */
  listing_id: number;

  /** The IETF language tag (e.g. 'fr') for the language of this translation. */
  language: string;

  /** The title of the Listing of this Translation. */
  title: string | null;

  /** The description of the Listing of this Translation. */
  description: string | null;

  /** The tags of the Listing of this Translation. */
  tags: string[];
}

/**
 * Represents several ListingVariationImages.
 */
export interface IListingVariationImages {
  /** @min 0 */
  count: number;
  results: IListingVariationImage[];
}

/**
 * A representation of the associations of variations and images on a listing.
 */
export interface IListingVariationImage {
  /**
   * The numeric ID of the Property.
   * @min 1
   */
  property_id: number;

  /**
   * The numeric ID of the Value.
   * @min 1
   */
  value_id: number;

  /** The string value of the property. */
  value: string | null;

  /**
   * The numeric ID of the Image.
   * @min 1
   */
  image_id: number;
}

/**
 * A set of PaymentAccountLedgerEntry resources
 */
export interface IPaymentAccountLedgerEntries {
  /**
   * The number of PaymentAccountLedgerEntry resources found.
   * @min 0
   */
  count: number;

  /** The PaymentAccountLedgerEntry resources found. */
  results: IPaymentAccountLedgerEntry[];
}

/**
 * Represents an entry in a shop's ledger.
 */
export interface IPaymentAccountLedgerEntry {
  /**
   * The ledger entry's numeric ID.
   * @min 1
   */
  entry_id: number;

  /**
   * The ledger's numeric ID.
   * @min 1
   */
  ledger_id: number;

  /**
   * The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.
   * @min 0
   */
  sequence_number: number;

  /** The amount of money credited to the ledger. */
  amount: number;

  /** The currency of the entry on the ledger. */
  currency: string;

  /** Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment. */
  description: string;

  /** The amount of money in the shop's ledger the moment after this entry was applied. */
  balance: number;

  /**
   * The date and time the ledger entry was created in Epoch seconds..
   * @min 0
   */
  create_date: number;

  /** The original reference type for the ledger entry. */
  ledger_type: string;

  /** The object type the ledger entry refers to. */
  reference_type: string;

  /** The object id the ledger entry refers to. */
  reference_id: string | null;
}

/**
 * Represents several payments made with Etsy Payments. All monetary amounts are in USD pennies unless otherwise specified.
 */
export interface IPayments {
  /**
   * The number of payments in the response.
   * @min 0
   */
  count: number;

  /** A list of payments. */
  results: IPayment[];
}

/**
 * Represents a payment made with Etsy Payments. All monetary amounts are in USD pennies unless otherwise specified.
 */
export interface IPayment {
  /**
   * A unique numeric ID for a payment to a specific Etsy [shop](/documentation/reference#tag/Shop).
   * @min 1
   */
  payment_id: number;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) who paid the purchase.
   * @min 1
   */
  buyer_user_id: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shop_id: number;

  /**
   * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
   * @min 1
   */
  receipt_id: number;

  /** An integer equal to gross amount of the order, in pennies, including shipping and taxes. */
  amount_gross: IMoney;

  /** An integer equal to the original card processing fee of the order in pennies. */
  amount_fees: IMoney;

  /** An integer equal to the payment value, in pennies, less fees (`amount_gross` - `amount_fees`). */
  amount_net: IMoney;

  /** The total gross value of the payment posted once the purchase ships. This is equal to the `amount_gross` UNLESS the seller issues a refund prior to shipping. We consider "shipping" to the event which "posts" to the ledger. Therefore, if the seller refunds first, we reduce the `amount_gross` first and post then that amount. The seller never sees the refunded amount in their ledger. This is equal to the "Credit" amount in the ledger entry. */
  posted_gross?: IMoney;

  /** The total value of the fees posted once the purchase ships. Etsy refunds a proportional amount of the fees when a seller refunds a buyer. When the seller issues a refund prior to shipping, the posted amount is less then the original. */
  posted_fees?: IMoney;

  /** The total value of the payment at the time of posting, less fees. (`posted_gross` - `posted_fees`) */
  posted_net?: IMoney;

  /** The gross payment amount after the seller refunds a payment, partially or fully. */
  adjusted_gross?: IMoney;

  /** The new fee amount after a seller refunds a payment, partially or fully. */
  adjusted_fees?: IMoney;

  /** The total value of the payment after refunds, less fees (`adjusted_gross` - `adjusted_fees`). */
  adjusted_net?: IMoney;

  /** The ISO (alphabetic) code string for the payment's currency. */
  currency: string;

  /** The ISO (alphabetic) code for the shop's currency. The shop displays all prices in this currency by default. */
  shop_currency: string | null;

  /** The currency string of the buyer. */
  buyer_currency: string | null;

  /**
   * The numeric ID of the user to which the seller ships the order.
   * @min 1
   */
  shipping_user_id: number | null;

  /**
   * The numeric id identifying the shipping address.
   * @min 1
   */
  shipping_address_id: number;

  /**
   * The numeric ID identifying the billing address of the buyer.
   * @min 1
   */
  billing_address_id: number;

  /** A string indicating the current status of the payment, most commonly "settled" or "authed". */
  status: string;

  /**
   * The transaction\'s shipping date and time, in epoch seconds.
   * @min 946684800
   */
  shipped_timestamp: number | null;

  /**
   * The transaction\'s creation date and time, in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The date and time of the last change to the payment adjustment in epoch seconds.
   * @min 946684800
   */
  update_timestamp: number;

  /** List of refund objects on an Etsy Payments transaction. All monetary amounts are in USD pennies unless otherwise specified. */
  payment_adjustments: IPaymentAdjustment[];
}

/**
 * Represents a refund, which applies to a prior Etsy payment. All monetary amounts are in USD pennies unless otherwise specified.
 */
export interface IPaymentAdjustment {
  /**
   * The numeric ID for a payment adjustment.
   * @min 1
   */
  payment_adjustment_id: number;

  /**
   * A unique numeric ID for a payment to a specific Etsy [shop](/documentation/reference#tag/Shop).
   * @min 1
   */
  payment_id: number;

  /** The status string of the payment adjustment. */
  status: string;

  /** When true, the payment adjustment was or is likely to complete successfully. */
  is_success: boolean;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) (seller) fulfilling the purchase.
   * @min 1
   */
  user_id: number;

  /** A human-readable string describing the reason for the refund. */
  reason_code: string;

  /**
   * The total numeric amount of the refund in the payment currency.
   * @min 0
   */
  total_adjustment_amount: number | null;

  /**
   * The numeric amount of the refund in the shop currency.
   * @min 0
   */
  shop_total_adjustment_amount: number | null;

  /**
   * The numeric amount of the refund in the buyer currency.
   * @min 0
   */
  buyer_total_adjustment_amount: number | null;

  /**
   * The numeric amount of card processing fees associated with a payment adjustment.
   * @min 0
   */
  total_fee_adjustment_amount: number | null;

  /**
   * The transaction\'s creation date and time, in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The date and time of the last change to the payment adjustment in epoch seconds.
   * @min 946684800
   */
  update_timestamp: number;
}

/**
 * A confirmation that the current application has access to the Open API
 */
export interface IPong {
  /**
   * The authenticated application's ID
   * @min 1
   */
  application_id: number;
}

/**
 * The record of a purchase from a shop. Shop receipts display monetary values using the shop's currency.
 */
export interface IShopReceipt {
  /**
   * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
   * @min 1
   */
  receipt_id: number;

  /**
   * The numeric value for the Etsy channel that serviced the purchase: 0 for Etsy.com, 1 for a Pattern shop.
   * @min 0
   */
  receipt_type: number;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) (seller) fulfilling the purchase.
   * @min 1
   */
  seller_user_id: number;

  /**
   * The email address string for the seller of the listing.
   * @format email
   */
  seller_email: string | null;

  /**
   * The numeric ID for the [user](/documentation/reference#tag/User) making the purchase.
   * @min 1
   */
  buyer_user_id: number;

  /** The email address string for the buyer of the listing. */
  buyer_email: string | null;

  /** The name string for the recipient in the shipping address. */
  name: string;

  /** The first address line string for the recipient in the shipping address. */
  first_line: string;

  /** The optional second address line string for the recipient in the shipping address. */
  second_line: string | null;

  /** The city string for the recipient in the shipping address. */
  city: string;

  /** The state string for the recipient in the shipping address. */
  state: string | null;

  /** The zip code string (not necessarily a number) for the recipient in the shipping address. */
  zip: string;

  /** The current order status string. One of: `Open`, `Paid`, `Completed`, `Payment Processing`. */
  status: "paid" | "completed" | "open" | "payment processing" | "canceled";

  /** The formatted shipping address string for the recipient in the shipping address. */
  formatted_address: string;

  /** The ISO-3166 alpha-2 country code string for the recipient in the shipping address. */
  country_iso: string;

  /** The payment method string identifying purchaser's payment method, which must be one of: \'cc\' (credit card), \'paypal\', \'check\', \'mo\' (money order), \'bt\' (bank transfer), \'other\', \'ideal\', \'sofort\', \'apple_pay\', \'google\', \'android_pay\', \'google_pay\', \'klarna\', \'k_pay_in_4\' (klarna), \'k_pay_in_3\' (klarna), or \'k_financing\' (klarna). */
  payment_method: string;

  /** The email address string for the email address to which to send payment confirmation */
  payment_email: string;

  /** An optional message string from the seller. */
  message_from_seller: string | null;

  /** An optional message string from the buyer. */
  message_from_buyer: string | null;

  /** The machine-generated acknowledgement string from the payment system. */
  message_from_payment: string | null;

  /** When true, buyer paid for this purchase. */
  is_paid: boolean;

  /** When true, seller shipped the products. */
  is_shipped: boolean;

  /**
   * The receipt\'s creation time, in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The time of the last update to the receipt, in epoch seconds.
   * @min 946684800
   */
  update_timestamp: number;

  /** When true, the buyer indicated this purchase is a gift. */
  is_gift: boolean;

  /** A gift message string the buyer requests delivered with the product. */
  gift_message: string;

  /** A number equal to the total_price minus the coupon discount plus tax and shipping costs. */
  grandtotal: IMoney;

  /** A number equal to the total_price minus coupon discounts. Does not included tax or shipping costs. */
  subtotal: IMoney;

  /** A number equal to the sum of the individual listings\' (price * quantity). Does not included tax or shipping costs. */
  total_price: IMoney;

  /** A number equal to the total shipping cost of the receipt. */
  total_shipping_cost: IMoney;

  /** The total sales tax of the receipt. */
  total_tax_cost: IMoney;

  /** A number equal to the total value-added tax (VAT) of the receipt. */
  total_vat_cost: IMoney;

  /** The numeric total discounted price for the receipt when using a discount (percent or fixed) coupon. Free shipping coupons are not included in this discount amount. */
  discount_amt: IMoney;

  /** The numeric price of gift wrap for this receipt. */
  gift_wrap_price: IMoney;

  /** A list of shipment statements for this receipt. */
  shipments: IShopReceiptShipment[];

  /** Array of transactions for the receipt. */
  transactions: IShopReceiptTransaction[];
}

/**
 * The record of one shipment event for a ShopReceipt. A receipt may have many ShopReceiptShipment records.
 */
export interface IShopReceiptShipment {
  /**
   * The unique numeric ID of a Shop Receipt Shipment record.
   * @min 1
   */
  receipt_shipping_id: number | null;

  /**
   * The time at which Etsy notified the buyer of the shipment event, in epoch seconds.
   * @min 946684800
   */
  shipment_notification_timestamp: number;

  /** The name string for the carrier/company responsible for delivering the shipment. */
  carrier_name: string;

  /** The tracking code string provided by the carrier/company for the shipment. */
  tracking_code: string;
}

/**
 * The receipts for a specific Shop.
 */
export interface IShopReceipts {
  /** The number of Shop Receipts found. */
  count: number;

  /** List of Shop Receipt resources found, with all Shop Receipt fields for each resource. */
  results: IShopReceipt[];
}

/**
 * A set of transaction review records left by Users.
 */
export interface ITransactionReviews {
  /**
   * The number of TransactionReview resources found.
   * @min 0
   */
  count: number;

  /** The TransactionReview resources found. */
  results: ITransactionReview[];
}

/**
 * A transaction review record left by a User.
 */
export interface ITransactionReview {
  /**
   * The shop's numeric ID.
   * @min 1
   */
  shop_id: number;

  /**
   * The ID of the ShopListing that the TransactionReview belongs to.
   * @min 1
   */
  listing_id: number;

  /**
   * The ID of the ShopReceipt Transaction that the TransactionReview belongs to.
   * @min 1
   */
  transaction_id: number;

  /**
   * The numeric ID of the user who was the buyer in this transaction. Note: This field may be absent, depending on the buyer's privacy settings.
   * @min 1
   */
  buyer_user_id: number | null;

  /**
   * Rating value on scale from 1 to 5
   * @min 0
   */
  rating: number;

  /** A message left by the author, explaining the feedback. */
  review: string;

  /** The language of the TransactionReview */
  language: string;

  /** The url to a photo provided with the feedback, dimensions fullxfull. Note: This field may be absent, depending on the buyer's privacy settings. */
  image_url_fullxfull: string | null;

  /**
   * The date and time the TransactionReview was created in epoch seconds.
   * @min 946684800
   */
  create_timestamp: number;

  /**
   * The date and time the TransactionReview was updated in epoch seconds.
   * @min 946684800
   */
  update_timestamp: number;
}

/**
 * A list of taxonomy nodes from the seller taxonomy tree.
 */
export interface ISellerTaxonomyNodes {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: ISellerTaxonomyNode[];
}

/**
 * A taxonomy node in the seller taxonomy tree.
 */
export interface ISellerTaxonomyNode {
  /**
   * The unique numeric ID of an Etsy taxonomy node, which is a metadata category for listings organized into the seller taxonomy hierarchy tree. For example, the \"shoes\" taxonomy node (ID: 1429, level: 1) is higher in the hierarchy than \"girls' shoes\" (ID: 1440, level: 2). The taxonomy nodes assigned to a listing support access to specific standardized product scales and properties. For example, listings assigned the taxonomy nodes \"shoes\" or \"girls' shoes\" support access to the \"EU\" shoe size scale with its associated property names and IDs for EU shoe sizes, such as property `value_id`:\"1394\", and `name`:\"38\".
   * @min 1
   */
  id: number;

  /**
   * The integer depth of this taxonomy node in the seller taxonomy tree, with roots at level 0.
   * @min 0
   */
  level: number;

  /** The name string for this taxonomy node. */
  name: string;

  /**
   * The numeric taxonomy ID of the parent of this node.
   * @min 1
   */
  parent_id?: number | null;

  /** An array of taxonomy nodes for all the direct children of this taxonomy node in the seller taxanomy tree. */
  children: ISellerTaxonomyNode[];

  /** An array of `taxonomy_id`s including this node and all of its direct parents in the seller taxonomy tree up to a root node. They are listed in order from root to leaf. */
  full_path_taxonomy_ids: number[];
}

/**
 * A list of product property definitions.
 */
export interface ITaxonomyNodeProperties {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: ITaxonomyNodeProperty[];
}

/**
 * A product property definition.
 */
export interface ITaxonomyNodeProperty {
  /**
   * The unique numeric ID of this product property.
   * @min 1
   */
  property_id: number;

  /** The name string for this taxonomy node. */
  name: string;

  /** The human-readable product property name string. */
  display_name: string;

  /** A list of available scales. */
  scales: ITaxonomyPropertyScale[];

  /** When true, listings assigned eligible taxonomy IDs require this property. */
  is_required: boolean;

  /** When true, you can use this property in listing attributes. */
  supports_attributes: boolean;

  /** When true, you can use this property in listing variations. */
  supports_variations: boolean;

  /** When true, you can assign multiple property values to this property */
  is_multivalued: boolean;

  /** A list of supported property value strings for this property. */
  possible_values: ITaxonomyPropertyValue[];

  /** A list of property value strings automatically and always selected for the given property. */
  selected_values: ITaxonomyPropertyValue[];
}

/**
 * A scale defnining the assignable increments for the property values available to specific product properties.
 */
export interface ITaxonomyPropertyScale {
  /**
   * The unique numeric ID of a scale.
   * @min 1
   */
  scale_id: number;

  /** The name string for a scale. */
  display_name: string;

  /** The description string for a scale. */
  description: string;
}

/**
 * A property value for a specific product property, which may also employ a specific scale.
 */
export interface ITaxonomyPropertyValue {
  /**
   * The numeric ID of this property value.
   * @min 1
   */
  value_id: number | null;

  /** The name string of this property value. */
  name: string;

  /**
   * The numeric scale ID of the scale to which this property value belongs.
   * @min 1
   */
  scale_id: number | null;

  /** A list of numeric property value IDs this property value is equal to (if any). */
  equal_to: number[];
}

/**
 * Represents several ShippingCarriers.
 */
export interface IShippingCarriers {
  /** @min 0 */
  count: number;
  results: IShippingCarrier[];
}

/**
 * A supported shipping carrier, which is used to calculate an Estimated Delivery Date.
 */
export interface IShippingCarrier {
  /**
   * The numeric ID of this shipping carrier.
   * @min 1
   */
  shipping_carrier_id: number;

  /** The name of this shipping carrier. */
  name: string;

  /** Set of domestic mail classes of this shipping carrier. */
  domestic_classes: IShippingCarrierMailClass[];

  /** Set of international mail classes of this shipping carrier. */
  international_classes: IShippingCarrierMailClass[];
}

/**
 * A shipping carrier's mail class, which is used to calculate an Estimated Delivery Date.
 */
export interface IShippingCarrierMailClass {
  /** The unique identifier of this mail class. */
  mail_class_key: string;

  /** The name of this mail class. */
  name: string;
}

/**
 * A set of Shop records.
 */
export interface IShops {
  /**
   * The total number of Shops
   * @min 0
   */
  count: number;

  /** The Shop resources. */
  results: IShop[];
}

/**
 * Represents a list of shop production partners.
 */
export interface IShopProductionPartners {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: IShopProductionPartner[];
}

/**
 * A section within a shop, into which a user can sort listings.
 */
export interface IShopSection {
  /**
   * The numeric ID of a section in a specific Etsy shop.
   * @min 1
   */
  shop_section_id: number;

  /** The title string for a shop section. */
  title: string;

  /**
   * The positive non-zero numeric position of this section in the section display order for a shop, with rank 1 sections appearing first.
   * @min 0
   */
  rank: number;

  /**
   * The numeric ID of the [user](/documentation/reference#tag/User) who owns this shop section.
   * @min 1
   */
  user_id: number;

  /**
   * The number of active listings in one section of a specific Etsy shop.
   * @min 0
   */
  active_listing_count: number;
}

/**
 * All the sections in a sprecific Shop.
 */
export interface IShopSections {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: IShopSection[];
}

/**
 * Represents a list of shipping destination objects.
 */
export interface IShopShippingProfileDestinations {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: IShopShippingProfileDestination[];
}

/**
 * Represents several ShopShippingProfiles.
 */
export interface IShopShippingProfiles {
  /** @min 0 */
  count: number;
  results: IShopShippingProfile[];
}

/**
 * A list of shipping upgrade options.
 */
export interface IShopShippingProfileUpgrades {
  /**
   * The number of results.
   * @min 0
   */
  count: number;

  /** The list of requested resources. */
  results: IShopShippingProfileUpgrade[];
}

/**
 * Represents a user's address.
 */
export interface IUserAddress {
  /**
   * The numeric ID of the user's address.
   * @min 1
   */
  user_address_id: number;

  /**
   * The user's numeric ID.
   * @min 1
   */
  user_id: number;

  /** The user's name for this address. */
  name: string;

  /** The first line of the user's address. */
  first_line: string;

  /** The second line of the user's address. */
  second_line: string | null;

  /** The city field of the user's address. */
  city: string;

  /** The state field of the user's address. */
  state: string | null;

  /** The zip code field of the user's address. */
  zip: string;

  /** The ISO code of the country in this address. */
  iso_country_code: string | null;

  /** The name of the user's country. */
  country_name: string | null;

  /** Is this the user's default shipping address. */
  is_default_shipping_address: boolean;
}

/**
 * Represents several UserAddress records.
 */
export interface IUserAddresses {
  /**
   * The number of UserAddress records being returned.
   * @min 0
   */
  count: number;

  /** An array of UserAddress resources. */
  results: IUserAddress[];
}

export interface ICreateDraftListingPayload {
  /** The positive non-zero number of products available for purchase in the listing. Note: The listing quantity is the sum of available offering quantities. You can request the quantities for individual offerings from the ListingInventory resource using the [getListingInventory](/documentation/reference#operation/getListingInventory) endpoint. */
  quantity: number;

  /** The listing's title string. Valid title strings contain only letters, numbers, punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{P}\p{Sm}\p{Zs}™©®]/u) You can only use the %, :, & and + characters once each. */
  title: string;

  /** A description string of the product for sale in the listing. */
  description: string;

  /**
   * The positive non-zero price of the product. (Sold product listings are private) Note: The price is the minimum possible price. The getInventory method requests exact prices for available offerings.
   * @format float
   * @min 0.2
   * @max 50000
   */
  price: number;

  /** An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading. Requires 'is_supply' and 'when_made'. */
  who_made: "i_did" | "someone_else" | "collective";

  /** An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading. Requires 'is_supply' and 'who_made'. */
  when_made:
    | "made_to_order"
    | "2020_2021"
    | "2010_2019"
    | "2002_2009"
    | "before_2002"
    | "2000_2001"
    | "1990s"
    | "1980s"
    | "1970s"
    | "1960s"
    | "1950s"
    | "1940s"
    | "1930s"
    | "1920s"
    | "1910s"
    | "1900s"
    | "1800s"
    | "1700s"
    | "before_1700";

  /**
   * The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop.  [See SellerTaxonomy](/documentation/reference#tag/SellerTaxonomy) for more information.
   * @min 1
   */
  taxonomy_id: number;

  /**
   * The numeric ID of the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing. Required when listing type=physical.
   * @min 1
   */
  shipping_profile_id?: number | null;

  /** A list of material strings for materials used in the product. Valid materials strings contain only letters, numbers, and whitespace characters. (regex: /[^\p{L}\p{Nd}\p{Zs}]/u) Default value is null. */
  materials?: string[] | null;

  /**
   * The numeric ID of the [shop section](/documentation/reference#tag/Shop-Section) for this listing. Default value is null.
   * @min 1
   */
  shop_section_id?: number | null;

  /** The minimum number of days required to process this listing. Default value is null. */
  processing_min?: number | null;

  /** The maximum number of days required to process this listing. Default value is null. */
  processing_max?: number | null;

  /** A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{Zs}\-'™©®]/u) Default value is null. */
  tags?: string[] | null;

  /** An array of style strings for this listing, each of which is free-form text string such as "Formal", or "Steampunk". A Listing may have up to two styles. Valid style strings contain only letters, numbers, and whitespace characters. (regex: /[^\p{L}\p{Nd}\p{Zs}]/u) Default value is null. */
  styles?: string[] | null;

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_weight?: number | null;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_length?: number | null;

  /**
   * The numeric width of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_width?: number | null;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_height?: number | null;

  /** A string defining the units used to measure the weight of the product. Default value is null. */
  item_weight_unit?: "oz" | "lb" | "g" | "kg" | null;

  /** A string defining the units used to measure the dimensions of the product. Default value is null. */
  item_dimensions_unit?: "in" | "ft" | "mm" | "cm" | "m" | "yd" | "inches" | null;

  /** When true, this listing is personalizable. The default value is null. */
  is_personalizable?: boolean;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_is_required?: boolean;

  /** This an integer value representing the maximum length for the personalization message entered by the buyer. */
  personalization_char_count_max?: number;

  /** A string representing instructions for the buyer to enter the personalization. */
  personalization_instructions?: string;

  /** An array of unique IDs of production partner ids. */
  production_partner_ids?: number[] | null;

  /** An array of numeric image IDs of the images in a listing, which can include up to 10 images. */
  image_ids?: number[];

  /** When true, tags the listing as a supply product, else indicates that it's a finished product. Helps buyers locate the listing under the Supplies heading. Requires 'who_made' and 'when_made'. */
  is_supply?: boolean;

  /** When true, a buyer may contact the seller for a customized order. The default value is true when a shop accepts custom orders. Does not apply to shops that do not accept custom orders. */
  is_customizable?: boolean;

  /** When true, renews a listing for four months upon expriation. If set to true when previously false, etsy.com renews the listing before it expires, but the renewal period starts immidiately rather than extending the listing's expiration date. Any unused time remaining on the listing is lost. Renewals result in charges to a user's bill. */
  should_auto_renew?: boolean;

  /** When true, applicable [shop](/documentation/reference#tag/Shop) tax rates apply to this listing at checkout. */
  is_taxable?: boolean;

  /** An enumerated type string that indicates whether the listing is physical or a digital download. */
  type?: "physical" | "download" | "both";
}

export interface IGetListingsByShopParams {
  /** An enumerated string from any of: active or inactive. Note: Setting a draft listing to active will also publish the listing on etsy.com. Setting a sold out listing to active will update the quantity to 1 and renew the listing on etsy.com. */
  state?: "active" | "inactive" | "sold_out" | "draft" | "expired";

  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /** The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).  */
  sort_on?: "created" | "price" | "updated";

  /** The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.). */
  sort_order?: "asc" | "ascending" | "desc" | "descending" | "up" | "down";

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetListingParams {
  /** An enumerated string that attaches a valid association. Acceptable inputs are 'shop', 'images' and 'user'. Default value is an empty array. */
  includes?: ("Shipping" | "Images" | "Shop" | "User")[];

  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listingId: number;
}

export interface IUploadListingFilePayload {
  /**
   * The unique numeric ID of a file associated with a digital listing.
   * @min 1
   */
  listing_file_id?: number;

  /**
   * A binary file to upload.
   * @format binary
   */
  file?: File | null;

  /** The file name string of a file to upload */
  name?: string;

  /**
   * The positive non-zero numeric position in the images displayed in a listing, with rank 1 images appearing in the left-most position in a listing.
   * @min 1
   */
  rank?: number;
}

export interface IFindAllListingsActiveParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /** Search term or phrase that must appear in all results. */
  keywords?: string;

  /** The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).  */
  sort_on?: "created" | "price" | "updated";

  /** The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.). */
  sort_order?: "asc" | "ascending" | "desc" | "descending" | "up" | "down";

  /**
   * The minimum price of listings to be returned by a search result.
   * @format float
   */
  min_price?: number;

  /**
   * The maximum price of listings to be returned by a search result.
   * @format float
   */
  max_price?: number;

  /**
   * The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop.  [See SellerTaxonomy](/documentation/reference#tag/SellerTaxonomy) for more information.
   * @min 1
   */
  taxonomy_id?: number;

  /** Filters by shop location. If location cannot be parsed, Etsy responds with an error. */
  shop_location?: string;
}

export interface IFindAllActiveListingsByShopParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /** Search term or phrase that must appear in all results. */
  keywords?: string;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IUploadListingImagePayload {
  /**
   * The file name string of a file to upload
   * @format binary
   */
  image?: File | null;

  /**
   * The numeric ID of the primary [listing image](/documentation/reference#tag/ShopListing-Image) for this transaction.
   * @min 1
   */
  listing_image_id?: number;

  /**
   * The positive non-zero numeric position in the images displayed in a listing, with rank 1 images appearing in the left-most position in a listing.
   * @min 0
   */
  rank?: number;

  /** When true, this request replaces the existing image at a given rank. */
  overwrite?: boolean;

  /** When true, indicates that the uploaded image has a watermark. */
  is_watermarked?: boolean;
}

export interface IGetListingInventoryParams {
  /** An enumerated string that attaches an valid association. Default value is null. */
  includes?: "Listing";

  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listingId: number;
}

export interface IUpdateListingInventoryPayload {
  /** A JSON array of products available in a listing, even if only one product. All field names in the JSON blobs are lowercase. */
  products: {
    sku?: string | null;
    property_values?: {
      property_id: number;
      value_ids: number[];
      scale_id?: number | null;
      property_name?: string;
      values: string[];
    }[];
    offerings: { price: number; quantity: number; is_enabled: boolean }[];
  }[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change product prices, if any. For example, if you charge specific prices for different sized products in the same listing, then this array contains the property ID for size. */
  price_on_property?: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the quantity of the products, if any. For example, if you stock specific quantities of different colored products in the same listing, then this array contains the property ID for color. */
  quantity_on_property?: number[];

  /** An array of unique [listing property](/documentation/reference#operation/getListingProperties) ID integers for the properties that change the product SKU, if any. For example, if you use specific skus for different colored products in the same listing, then this array contains the property ID for color. */
  sku_on_property?: number[];
}

export interface IGetListingsByListingIdsParams {
  /** The list of numeric IDS for the listings in a specific Etsy shop. */
  listing_ids: number[];

  /** An enumerated string that attaches a valid association. Acceptable inputs are 'shop', 'images' and 'user'. Default value is an empty array. */
  includes?: ("Shipping" | "Images" | "Shop" | "User")[];
}

export interface IGetFeaturedListingsByShopParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IUpdateListingPropertyPayload {
  /** An array of unique IDs of multiple Etsy [listing property](/documentation/reference#operation/getListingProperties) values. For example, if your listing offers different sizes of a product, then the value ID list contains value IDs for each size. */
  value_ids: number[];

  /** An array of value strings for multiple Etsy [listing property](/documentation/reference#operation/getListingProperties) values. For example, if your listing offers different colored products, then the values array contains the color strings for each color. */
  values: string[];

  /**
   * The numeric ID of a single Etsy.com measurement scale. For example, for shoe size, there are three `scale_id`s available - *UK*, *US/Canada*, and *EU*, where *US/Canada* has `scale_id` 19.
   * @min 1
   */
  scale_id?: number;
}

export interface IGetShopReceiptTransactionsByListingParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;

  /**
   * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
   * @min 1
   */
  listingId: number;
}

export interface ICreateListingTranslationPayload {
  /** The title of the Listing of this Translation. */
  title: string;

  /** The description of the Listing of this Translation. */
  description: string;

  /** The tags of the Listing of this Translation. */
  tags?: string[];
}

export interface IUpdateListingTranslationPayload {
  /** The title of the Listing of this Translation. */
  title: string;

  /** The description of the Listing of this Translation. */
  description: string;

  /** The tags of the Listing of this Translation. */
  tags?: string[];
}

export interface IUpdateListingPayload {
  /** The positive non-zero number of products available for purchase in the listing. Note: The listing quantity is the sum of available offering quantities. You can request the quantities for individual offerings from the ListingInventory resource using the [getListingInventory](/documentation/reference#operation/getListingInventory) endpoint. */
  quantity?: number;

  /**
   * The positive non-zero price of the product. (Sold product listings are private) Note: The price is the minimum possible price. The getInventory method requests exact prices for available offerings.
   * @format float
   * @min 0.2
   * @max 50000
   */
  price?: number;

  /** The listing's title string. Valid title strings contain only letters, numbers, punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{P}\p{Sm}\p{Zs}™©®]/u) You can only use the %, :, & and + characters once each. */
  title?: string;

  /** A description string of the product for sale in the listing. */
  description?: string;

  /** A list of material strings for materials used in the product. Valid materials strings contain only letters, numbers, and whitespace characters. (regex: /[^\p{L}\p{Nd}\p{Zs}]/u) Default value is null. */
  materials?: string[] | null;

  /** When true, renews a listing for four months upon expriation. If set to true when previously false, etsy.com renews the listing before it expires, but the renewal period starts immidiately rather than extending the listing's expiration date. Any unused time remaining on the listing is lost. Renewals result in charges to a user's bill. */
  should_auto_renew?: boolean;

  /**
   * The numeric ID of the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing. Required when listing type=physical.
   * @min 1
   */
  shipping_profile_id?: number | null;

  /** The numeric ID of the [shop section](/documentation/reference#tag/Shop-Section) for this listing. Default value is null. */
  shop_section_id?: number | null;

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_weight?: number | null;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_length?: number | null;

  /**
   * The numeric width of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_width?: number | null;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'. Default value is null. If set, the value must be greater than 0.
   * @format float
   * @min 0
   * @max 1.79769313486e+308
   */
  item_height?: number | null;

  /** A string defining the units used to measure the weight of the product. Default value is null. */
  item_weight_unit?: "oz" | "lb" | "g" | "kg" | null;

  /** A string defining the units used to measure the dimensions of the product. Default value is null. */
  item_dimensions_unit?: "in" | "ft" | "mm" | "cm" | "m" | "yd" | "inches" | null;

  /** When true, applicable [shop](/documentation/reference#tag/Shop) tax rates apply to this listing at checkout. */
  is_taxable?: boolean;

  /**
   * The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop.  [See SellerTaxonomy](/documentation/reference#tag/SellerTaxonomy) for more information.
   * @min 1
   */
  taxonomy_id?: number;

  /** A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{Zs}\-'™©®]/u) Default value is null. */
  tags?: string[] | null;

  /** An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading. Requires 'is_supply' and 'when_made'. */
  who_made?: "i_did" | "someone_else" | "collective";

  /** An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading. Requires 'is_supply' and 'who_made'. */
  when_made?:
    | "made_to_order"
    | "2020_2021"
    | "2010_2019"
    | "2002_2009"
    | "before_2002"
    | "2000_2001"
    | "1990s"
    | "1980s"
    | "1970s"
    | "1960s"
    | "1950s"
    | "1940s"
    | "1930s"
    | "1920s"
    | "1910s"
    | "1900s"
    | "1800s"
    | "1700s"
    | "before_1700";

  /** The positive non-zero numeric position in the featured listings of the shop, with rank 1 listings appearing in the left-most position in featured listing on a shop’s home page. */
  featured_rank?: number | null;

  /** When true, this listing is personalizable. The default value is null. */
  is_personalizable?: boolean;

  /** When true, this listing requires personalization. The default value is null. */
  personalization_is_required?: boolean;

  /** This an integer value representing the maximum length for the personalization message entered by the buyer. */
  personalization_char_count_max?: number;

  /** A string representing instructions for the buyer to enter the personalization. */
  personalization_instructions?: string;

  /** An enumerated string from any of: active or inactive. Note: Setting a draft listing to active will also publish the listing on etsy.com. Setting a sold out listing to active will update the quantity to 1 and renew the listing on etsy.com. */
  state?: "active" | "inactive";

  /** When true, tags the listing as a supply product, else indicates that it's a finished product. Helps buyers locate the listing under the Supplies heading. Requires 'who_made' and 'when_made'. */
  is_supply?: boolean;

  /** An array of unique IDs of production partner ids. */
  production_partner_ids?: number[] | null;

  /** An enumerated type string that indicates whether the listing is physical or a digital download. */
  type?: "physical" | "download" | "both" | null;
}

export interface IUpdateVariationImagesPayload {
  /** A list of variation image data. */
  variation_images: { property_id: number; value_id: number; image_id: number }[];
}

export interface IGetShopPaymentAccountLedgerEntriesParams {
  /**
   * The earliest unix timestamp for when a record was created.
   * @min 946684800
   */
  min_created: number;

  /**
   * The latest unix timestamp for when a record was created.
   * @min 946684800
   */
  max_created: number;

  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetPaymentAccountLedgerEntryPaymentsParams {
  ledger_entry_ids: number[];

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetPaymentsParams {
  /** A comma-separated array of Payment IDs numbers. */
  payment_ids: number[];

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetShopReceiptsParams {
  /**
   * The earliest unix timestamp for when a record was created.
   * @min 946684800
   */
  min_created?: number;

  /**
   * The latest unix timestamp for when a record was created.
   * @min 946684800
   */
  max_created?: number;

  /**
   * The earliest unix timestamp for when a record last changed.
   * @min 946684800
   */
  min_last_modified?: number;

  /**
   * The latest unix timestamp for when a record last changed.
   * @min 946684800
   */
  max_last_modified?: number;

  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /** When true, the seller recieved payment for the product(s) in this receipt. */
  was_paid?: boolean | null;

  /** When true, the seller shipped the product(s) in this receipt. */
  was_shipped?: boolean | null;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetListingsByShopReceiptParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
   * @min 1
   */
  receiptId: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface ICreateReceiptShipmentPayload {
  /** The tracking code for this receipt. */
  tracking_code?: string;

  /** The carrier name for this receipt. */
  carrier_name?: string;

  /** If true, the shipping notification will be sent to the seller as well */
  send_bcc?: boolean;
}

export interface IGetReviewsByShopParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetShippingCarriersParams {
  /**
   * The ISO code of the country from which the listing ships.
   * @format ISO 3166-1 alpha-2
   */
  origin_country_iso: string;
}

export interface IUpdateShopPayload {
  /** A brief heading string for the shop's main page. */
  title?: string;

  /** An announcement string to buyers that displays on the shop's homepage. */
  announcement?: string;

  /** A message string sent to users who complete a purchase from this shop. */
  sale_message?: string;

  /** A message string sent to users who purchase a digital item from this shop. */
  digital_sale_message?: string;
}

export interface IFindShopsParams {
  /** The shop's name string. */
  shop_name: string;

  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;
}

export interface ICreateShopSectionPayload {
  /** The title string for a shop section. */
  title: string;
}

export interface IGetListingsByShopSectionIdParams {
  /** A list of numeric IDS for all sections in a specific Etsy shop. */
  shop_section_ids: number[];

  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /** The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).  */
  sort_on?: "created" | "price" | "updated";

  /** The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.). */
  sort_order?: "asc" | "ascending" | "desc" | "descending" | "up" | "down";

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface ICreateShopShippingProfilePayload {
  /** The name string of this shipping profile. */
  title: string;

  /**
   * The ISO code of the country from which the listing ships.
   * @format ISO 3166-1 alpha-2
   */
  origin_country_iso: string;

  /**
   * The cost of shipping to this country/region alone, measured in the store's default currency.
   * @format float
   * @min 0
   */
  primary_cost: number;

  /**
   * The cost of shipping to this country/region with another item, measured in the store's default currency.
   * @format float
   * @min 0
   */
  secondary_cost: number;

  /**
   * The minimum time required to process to ship listings with this shipping profile.
   * @min 1
   * @max 10
   */
  min_processing_time: number;

  /**
   * The maximum processing time the listing needs to ship.
   * @min 1
   * @max 10
   */
  max_processing_time: number;

  /** The unit used to represent how long a processing time is. A week is equivalent to 5 business days. If none is provided, the unit is set to "business_days". */
  processing_time_unit?: "business_days" | "weeks";

  /**
   * The ISO code of the country to which the listing ships. If null, request sets destination to destination_region
   * @format ISO 3166-1 alpha-2
   */
  destination_country_iso?: string;

  /** The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU). If `none", request sets destination to destination_country_iso, or "everywhere" if destination_country_iso is also null */
  destination_region?: "eu" | "non_eu" | "none";

  /** The postal code string (not necessarily a number) for the location from which the listing ships. */
  origin_postal_code?: string;

  /**
   * The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date.
   * @min 0
   */
  shipping_carrier_id?: number;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class?: string;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days?: number;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days?: number;
}

export interface IUpdateShopShippingProfilePayload {
  /** The name string of this shipping profile. */
  title?: string;

  /**
   * The ISO code of the country from which the listing ships.
   * @format ISO 3166-1 alpha-2
   */
  origin_country_iso?: string;

  /**
   * The minimum time required to process to ship listings with this shipping profile.
   * @min 1
   * @max 10
   */
  min_processing_time?: number;

  /**
   * The maximum processing time the listing needs to ship.
   * @min 1
   * @max 10
   */
  max_processing_time?: number;

  /** The unit used to represent how long a processing time is. A week is equivalent to 5 business days. If none is provided, the unit is set to "business_days". */
  processing_time_unit?: "business_days" | "weeks";

  /** The postal code string (not necessarily a number) for the location from which the listing ships. */
  origin_postal_code?: string;
}

export interface ICreateShopShippingProfileDestinationPayload {
  /**
   * The cost of shipping to this country/region alone, measured in the store's default currency.
   * @format float
   * @min 0
   */
  primary_cost: number;

  /**
   * The cost of shipping to this country/region with another item, measured in the store's default currency.
   * @format float
   * @min 0
   */
  secondary_cost: number;

  /**
   * The ISO code of the country to which the listing ships. If null, request sets destination to destination_region
   * @format ISO 3166-1 alpha-2
   */
  destination_country_iso?: string;

  /** The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU). If `none", request sets destination to destination_country_iso, or "everywhere" if destination_country_iso is also null */
  destination_region?: "eu" | "non_eu" | "none";

  /**
   * The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date.
   * @min 0
   */
  shipping_carrier_id?: number;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class?: string;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days?: number;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days?: number;
}

export interface IGetShopShippingProfileDestinationsByShippingProfileParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;

  /**
   * The numeric ID of the [shipping profile](/documentation/reference#tag/ShopListing-ShippingProfile) associated with the listing. Required when listing type=physical.
   * @min 1
   */
  shippingProfileId: number;
}

export interface IUpdateShopShippingProfileDestinationPayload {
  /**
   * The cost of shipping to this country/region alone, measured in the store's default currency.
   * @format float
   * @min 0
   */
  primary_cost?: number;

  /**
   * The cost of shipping to this country/region with another item, measured in the store's default currency.
   * @format float
   * @min 0
   */
  secondary_cost?: number;

  /**
   * The ISO code of the country to which the listing ships. If null, request sets destination to destination_region
   * @format ISO 3166-1 alpha-2
   */
  destination_country_iso?: string;

  /** The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU). If `none", request sets destination to destination_country_iso, or "everywhere" if destination_country_iso is also null */
  destination_region?: "eu" | "non_eu" | "none";

  /**
   * The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date.
   * @min 0
   */
  shipping_carrier_id?: number;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class?: string;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days?: number;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days?: number;
}

export interface ICreateShopShippingProfileUpgradePayload {
  /** The type of the shipping upgrade. Domestic (0) or international (1). */
  type: "0" | "1";

  /** Name for the shipping upgrade shown to shoppers at checkout, e.g. USPS Priority. */
  upgrade_name: string;

  /**
   * Additional cost of adding the shipping upgrade.
   * @format float
   * @min 0
   */
  price: number;

  /**
   * Additional cost of adding the shipping upgrade for each additional item.
   * @format float
   * @min 0
   */
  secondary_price: number;

  /**
   * The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date.
   * @min 0
   */
  shipping_carrier_id?: number;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class?: string;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days?: number;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days?: number;
}

export interface IUpdateShopShippingProfileUpgradePayload {
  /** Name for the shipping upgrade shown to shoppers at checkout, e.g. USPS Priority. */
  upgrade_name?: string;

  /** The type of the shipping upgrade. Domestic (0) or international (1). */
  type?: "0" | "1";

  /**
   * Additional cost of adding the shipping upgrade.
   * @format float
   * @min 0
   */
  price?: number;

  /**
   * Additional cost of adding the shipping upgrade for each additional item.
   * @format float
   * @min 0
   */
  secondary_price?: number;

  /**
   * The unique ID of a supported shipping carrier, which is used to calculate an Estimated Delivery Date.
   * @min 0
   */
  shipping_carrier_id?: number;

  /** The unique ID string of a shipping carrier's mail class, which is used to calculate an estimated delivery date. */
  mail_class?: string;

  /**
   * The minimum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  min_delivery_days?: number;

  /**
   * The maximum number of business days a buyer can expect to wait to receive their purchased item once it has shipped.
   * @min 1
   * @max 45
   */
  max_delivery_days?: number;
}

export interface IGetShopReceiptTransactionsByShopParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   * @min 1
   */
  shopId: number;
}

export interface IGetUserAddressesParams {
  /**
   * The maximum number of results to return.
   * @min 1
   * @max 100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   * @min 0
   */
  offset?: number;
}
