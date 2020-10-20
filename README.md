# etsy-ts

Most of the code in this package is _generated_ by [etsy-api-scrapper](https://github.com/Granga/etsy-api-scraper).

See [Etsy API reference](https://www.etsy.com/developers/documentation/getting_started/api_basics#reference) for detailed info on methods and types you can find in this wrapper.

## Installation:
`npm install etsy-ts --save`

## Usage:
```typescript
import {User, Shop, Listing, IUser, IShop, IListing} from "etsy-ts";

(async () => {
    //get user, then user's shop, then shop's listings
    let user = (await User.getUser<IUser>({
        //add your api_key here
        user_id: ["rptr"]
    })).results[0];

    let shop = (await Shop.findAllUserShops<IShop>({
        user_id: user.login_name
    })).results[0];

    let listings = (await Listing.findAllShopListingsActive<IListing>({
        shop_id: shop.shop_id
    })).results;

    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
})();
```
