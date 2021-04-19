# etsy-ts

Most of the code in this package is _generated_ by [etsy-api-scrapper](https://github.com/Granga/etsy-api-scraper).

See [Etsy API reference](https://www.etsy.com/developers/documentation/getting_started/api_basics#reference) for
detailed info on methods and types you can find in this wrapper.

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
