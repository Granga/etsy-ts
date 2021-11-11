import fs from "fs-extra";
import { Etsy } from "../../src/v3";
import { initAuthRefresh } from "./auth-refresh";

(async () => {
    try {
        const credentials = await fs.readJSON("./examples/credentials.json");
        const apiKey = credentials.apiKey;
        const tokens = {
            accessToken: credentials.accessToken,
            refreshToken: credentials.refreshToken
        };
        const client = new Etsy({apiKey});

        // Token expires in 1 hour, so we'll refresh it when we receive a 401
        // initAuthRefresh(client, apiKey, tokens);

        let {data: ping} = await client.Other.ping();
        let {data: user} = await client.User.getUser(92841371, tokens);
        let {data: shop} = await client.Shop.getShop(13201425, tokens);
        let {data: {results: listings}} = await client.ShopListing.findAllActiveListingsByShop(
            {shopId: 13201425},
            tokens
        );

        console.log("Ping:", ping);
        console.log("User:", user);
        console.log("Shop:", shop);
        console.log("Listings:", listings);
    }
    catch (e) {
        console.error(e);
    }
})()

