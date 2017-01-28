#etsy-ts

Still under active development.

## Installation:
`npm install etsy-ts --save`

You will need [Fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) as well.
Depending on your environment you have three options:  


1. NodeJS - install [node-fetch](https://github.com/bitinn/node-fetch):  
    `npm install fetch-node --save`  
    `npm install @types/fetch-node --save-dev`  
    
2. Latest browsers (Chrome, Firefox, Edge) already have `window.fetch`. You can use it.  

3. Old browsers - use [this polyfill](https://github.com/github/fetch)  
    `npm install whatwg-fetch --save`  
    `npm install @types/whatwg-fetch --save-dev`



## Usage:
#####NodeJS:  
```
import fetch from "node-fetch";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IListing} from "../api/Listing";

let client = new EtsyApiClient(fetch, {
    baseUrl: "https://openapi.etsy.com/v2"
});
try {
    let listings = (await client.Listing.findAllListingActive<IListing>({
            limit: 50,
            geo_level: "city",
            tags: ["art", "wall"],
            api_key: "<YOUR_API_KEY>"
        })).results;
    
    console.log(listings);
}
catch (e) {
    console.error(e);
}
```

#####Browser
```
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IListing} from "../api/Listing";

let client = new EtsyApiClient(window.fetch, {
    baseUrl: "https://openapi.etsy.com/v2"
});
try {
    let listings = (await client.Listing.findAllListingActive<IListing>({
            limit: 50,
            geo_level: "city",
            tags: ["art", "wall"],
            api_key: "<YOUR_API_KEY>"
        })).results;
        
    console.log(listings);
}
catch (e) {
    console.error(e);
}
```
