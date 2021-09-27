# etsy-ts

## Installation:

`npm install etsy-ts --save`

## Usage:

```typescript
import FormData from "form-data";
import * as fs from "fs";
import unescape from "lodash.unescape";
import OAuth from "oauth-1.0a";
import { IListing, IListingImage, IListingInventory, IShop, IUser } from "../api";
import { Etsy } from "etsy-ts";
import Bottleneck from "bottleneck";

(async () => {
    let client = new Etsy({
        apiKeys: {
            key: "<ETSY API KEY>",
            secret: "<ETSY API SECRET>"
        },
        // optional request rate limit
        bottleneck: new Bottleneck({
            maxConcurrent: 1,
            minTime: 1000 / 10
        })
    });

    let token: OAuth.Token = {
        key: "<USER OAUTH KEY>",
        secret: "<USER OAUTH TOKEN>"
    };

    // 1. Get user, then user's shop, then shop's listings
    let user = (await client.User.getUser<IUser>({
        user_id: ["rptr"]
    }, {token})).data.results[0];

    let shop = (await client.Shop.findAllUserShops<IShop>({
        user_id: user.login_name
    }, {token})).data.results[0];

    let listings = (await client.Listing.findAllShopListingsActive<IListing>({
        shop_id: shop.shop_id
    }, {token})).data.results;

    let listingId = listings[0].listing_id;

    // 2. Uploading image (using node form-data package)
    let formData = new FormData();
    formData.append("listing_id", listingId);
    formData.append("image", fs.createReadStream("test.png"));

    let image = (await client.ListingImage.uploadListingImage<IListingImage>(
        formData as any,
        {
            axiosConfig: {headers: formData.getHeaders()},
            token: token
        }
    )).data.results[0];

    // 3. Update inventory
    // First get inventory
    let inventory = (await client.ListingInventory.getInventory({
        listing_id: listingId,
        write_missing_inventory: 1 as any
    }, {token})).data.results as any as IListingInventory;

    // We must unescape strings, otherwise Etsy won't accept them back
    let normalizedProducts = inventory.products.map(product => ({
        ...product,
        property_values: product.property_values.map(propertyValue => ({
            ...propertyValue,
            values: propertyValue.values.map(value => unescape(value))
        }))
    }));

    // For example, we increase product price by 0.01
    normalizedProducts.forEach(product => {
        let price = product.offerings[0].price;
        product.offerings[0].price = (price.amount / price.divisor) + 0.01;
    });

    // Send the updated inventory back to Etsy
    inventory = (await client.ListingInventory.updateInventory({
        ...inventory,
        listing_id: listingId,
        products: JSON.stringify(normalizedProducts)
    }, {
        token: token
    })).data.results as any as IListingInventory;

    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
    console.log("Image", image);
    console.log("Inventory", inventory);
})();
```

Most of the code in this package is _generated_ by [etsy-api-scrapper](https://github.com/Granga/etsy-api-scraper).

See [Etsy API reference](https://www.etsy.com/developers/documentation/getting_started/api_basics#reference) for
detailed info on methods and types you can find in this wrapper.
|     |     |     |     |
| --- | --- | --- | --- |  
| [ApiMethod](https://www.etsy.com/developers/documentation/reference/apimethod) | [GuestCart](https://www.etsy.com/developers/documentation/reference/guestcart) | [PaymentAdjustmentItem](https://www.etsy.com/developers/documentation/reference/paymentadjustmentitem) | [ShopTranslation](https://www.etsy.com/developers/documentation/reference/shoptranslation) |
| [Avatar](https://www.etsy.com/developers/documentation/reference/avatar) | [ImageType](https://www.etsy.com/developers/documentation/reference/imagetype) | [PaymentTemplate](https://www.etsy.com/developers/documentation/reference/paymenttemplate) | [StructuredPolicies](https://www.etsy.com/developers/documentation/reference/structuredpolicies) |
| [BillCharge](https://www.etsy.com/developers/documentation/reference/billcharge) | [Ledger](https://www.etsy.com/developers/documentation/reference/ledger) | [PropertyValue](https://www.etsy.com/developers/documentation/reference/propertyvalue) | [Style](https://www.etsy.com/developers/documentation/reference/style) |
| [BillingOverview](https://www.etsy.com/developers/documentation/reference/billingoverview) | [LedgerEntry](https://www.etsy.com/developers/documentation/reference/ledgerentry) | [Receipt](https://www.etsy.com/developers/documentation/reference/receipt) | [Taxonomy](https://www.etsy.com/developers/documentation/reference/taxonomy) |
| [BillPayment](https://www.etsy.com/developers/documentation/reference/billpayment) | [Listing](https://www.etsy.com/developers/documentation/reference/listing) | [ReceiptShipment](https://www.etsy.com/developers/documentation/reference/receiptshipment) | [TaxonomyNodeProperty](https://www.etsy.com/developers/documentation/reference/taxonomynodeproperty) |
| [Cart](https://www.etsy.com/developers/documentation/reference/cart) | [ListingFile](https://www.etsy.com/developers/documentation/reference/listingfile) | [Region](https://www.etsy.com/developers/documentation/reference/region) | [TaxonomyPropertyScale](https://www.etsy.com/developers/documentation/reference/taxonomypropertyscale) |
| [CartListing](https://www.etsy.com/developers/documentation/reference/cartlisting) | [ListingImage](https://www.etsy.com/developers/documentation/reference/listingimage) | [ShippingInfo](https://www.etsy.com/developers/documentation/reference/shippinginfo) | [TaxonomyPropertyValue](https://www.etsy.com/developers/documentation/reference/taxonomypropertyvalue) |
| [Country](https://www.etsy.com/developers/documentation/reference/country) | [ListingInventory](https://www.etsy.com/developers/documentation/reference/listinginventory) | [ShippingOption](https://www.etsy.com/developers/documentation/reference/shippingoption) | [Team](https://www.etsy.com/developers/documentation/reference/team) |
| [Coupon](https://www.etsy.com/developers/documentation/reference/coupon) | [ListingOffering](https://www.etsy.com/developers/documentation/reference/listingoffering) | [ShippingTemplate](https://www.etsy.com/developers/documentation/reference/shippingtemplate) | [Transaction](https://www.etsy.com/developers/documentation/reference/transaction) |
| [DataType](https://www.etsy.com/developers/documentation/reference/datatype) | [ListingProduct](https://www.etsy.com/developers/documentation/reference/listingproduct) | [ShippingTemplateEntry](https://www.etsy.com/developers/documentation/reference/shippingtemplateentry) | [Treasury](https://www.etsy.com/developers/documentation/reference/treasury) |
| [FavoriteListing](https://www.etsy.com/developers/documentation/reference/favoritelisting) | [ListingTranslation](https://www.etsy.com/developers/documentation/reference/listingtranslation) | [ShippingUpgrade](https://www.etsy.com/developers/documentation/reference/shippingupgrade) | [TreasuryCounts](https://www.etsy.com/developers/documentation/reference/treasurycounts) |
| [FavoriteUser](https://www.etsy.com/developers/documentation/reference/favoriteuser) | [ListingVariationImage](https://www.etsy.com/developers/documentation/reference/listingvariationimage) | [Shop](https://www.etsy.com/developers/documentation/reference/shop) | [TreasuryListing](https://www.etsy.com/developers/documentation/reference/treasurylisting) |
| [FeaturedTreasury](https://www.etsy.com/developers/documentation/reference/featuredtreasury) | [Money](https://www.etsy.com/developers/documentation/reference/money) | [ShopAbout](https://www.etsy.com/developers/documentation/reference/shopabout) | [TreasuryListingData](https://www.etsy.com/developers/documentation/reference/treasurylistingdata) |
| [Feedback](https://www.etsy.com/developers/documentation/reference/feedback) | [ParamList](https://www.etsy.com/developers/documentation/reference/paramlist) | [ShopAboutImage](https://www.etsy.com/developers/documentation/reference/shopaboutimage) | [User](https://www.etsy.com/developers/documentation/reference/user) |
| [FeedbackInfo](https://www.etsy.com/developers/documentation/reference/feedbackinfo) | [Payment](https://www.etsy.com/developers/documentation/reference/payment) | [ShopAboutMember](https://www.etsy.com/developers/documentation/reference/shopaboutmember) | [UserAddress](https://www.etsy.com/developers/documentation/reference/useraddress) |
| [ForumPost](https://www.etsy.com/developers/documentation/reference/forumpost) | [PaymentAccountLedgerEntry](https://www.etsy.com/developers/documentation/reference/paymentaccountledgerentry) | [ShopSection](https://www.etsy.com/developers/documentation/reference/shopsection) | [UserProfile](https://www.etsy.com/developers/documentation/reference/userprofile) |
| [Guest](https://www.etsy.com/developers/documentation/reference/guest) | [PaymentAdjustment](https://www.etsy.com/developers/documentation/reference/paymentadjustment) | [ShopSectionTranslation](https://www.etsy.com/developers/documentation/reference/shopsectiontranslation) |     |

