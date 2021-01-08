# etsy-ts

Most of the code in this package is _generated_ by [etsy-api-scrapper](https://github.com/Granga/etsy-api-scraper).

See [Etsy API reference](https://www.etsy.com/developers/documentation/getting_started/api_basics#reference) for
detailed info on methods and types you can find in this wrapper.

## Installation:

`npm install etsy-ts --save`

## Usage:

```typescript
import { User, Shop, Listing, IUser, IShop, IListing } from "etsy-ts";
import OAuth from "oauth-1.0a";

(async () => {
    let client = new Etsy({
        apiKeys: {
            key: "<ETSY API KEY>",
            secret: "<ETSY API SECRET>"
        },
    });

    let token: OAuth.Token = {
        key: "<USER OAUTH KEY>",
        secret: "<USER OAUTH TOKEN>"
    };

    //get user, then user's shop, then shop's listings
    let user = (await client.User.getUser<IUser>({
        user_id: ["rptr"]
    }, {token})).data.results[0];

    let shop = (await client.Shop.findAllUserShops<IShop>({
        user_id: user.login_name
    }, {token})).data.results[0];

    let listings = (await client.Listing.findAllShopListingsActive<IListing>({
        shop_id: shop.shop_id
    }, {token})).data.results;

    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
})();
```
