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
        initAuthRefresh(client, apiKey, tokens);

        const myData = {
            user_id: 92841371,
            receipt_id: 2332707680,
            carrier_name: "ups",
            tracking_code: "555015043133"
        };

        let {data: ping} = await client.Other.ping();
        let {data: user} = await client.User.getUser(myData.user_id, tokens);
        let {data: shop} = await client.Shop.getShopByOwnerUserId(user.user_id, tokens);
        let {data: {results: listings}} = await client.ShopListing.findAllActiveListingsByShop(
            {shopId: shop.shop_id},
            tokens
        );

        let {data: receipt} = await client.ShopReceipt.getShopReceipt(shop.shop_id, myData.receipt_id, tokens);
        let {data: shipment} = await client.ShopReceipt.createReceiptShipment(
            shop.shop_id,
            receipt.receipt_id,
            {
                carrier_name: myData.carrier_name,
                tracking_code: myData.tracking_code,
                send_bcc: false,
            },
            tokens
        );

        console.log("Ping:", ping);
        console.log("User:", user);
        console.log("Shop:", shop);
        console.log("Listings:", listings);
        console.log("Receipt:", receipt);
        console.log("Shipment:", shipment);
    }
    catch (e) {
        console.error(e);
    }
})()

