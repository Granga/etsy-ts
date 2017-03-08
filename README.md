#etsy-ts

Still under active development.

Most of the code in this package is _generated_ by [etsy-api-scrapper](https://github.com/Granga/etsy-api-scraper).

## Installation:
`npm install etsy-ts --save`

## Usage:
```
import * as client from "etsy-ts";
import * as fetch from "node-fetch";

//for NodeJS add fetch on global
global["fetch"] = fetch;

//get user, then user's shop, then shop's listings
client.User.getUser<IUser>({
    //add your api_key here
    user_id: ["rptr"]
}).then(response => {
    let user = response.results[0];
    console.log("User:", user)

    return client.Shop.findAllUserShops<IShop>({
        user_id: user.login_name
    });
}).then(response => {
    let shop = response.results[0];
    console.log("Shop:", shop);

    return client.Listing.findAllShopListingsActive<IListing[]>({
        shop_id: shop.shop_id
    });
}).then(response => {
    let listings = response.results;
    console.log("Listings:", listings);
}).catch(e => console.error(e));
```

##`fetch` in global scope is required

You will need [Fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) as well.
Depending on your environment you have three options:  


1. NodeJS - install [node-fetch](https://github.com/bitinn/node-fetch):  
    `npm install fetch-node --save`  
    `npm install @types/fetch-node --save-dev`  
    
2. Latest browsers (Chrome, Firefox, Edge) already have `window.fetch`. You can use it.  

3. Old browsers - use [this polyfill](https://github.com/github/fetch)  
    `npm install whatwg-fetch --save`  
    `npm install @types/whatwg-fetch --save-dev`  
