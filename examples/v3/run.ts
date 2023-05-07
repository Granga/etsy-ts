import * as fs from "fs-extra";
import { Etsy } from "../../src";
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

    let {data: ping} = await client.Other.ping();
    let {data: user} = await client.User.getUser(92841371, tokens);
    let {data: shop} = await client.Shop.getShopByOwnerUserId(user.user_id, tokens);
    let {data: {results: listings}} = await client.ShopListing.findAllActiveListingsByShop({
      shopId: shop.shop_id,
      limit: 10
    });

    // Upload image
    const listing = listings[0];
    await client.ShopListingImage.uploadListingImage(
      13201425,
      listing.listing_id,
      {
        image: fs.createReadStream("./examples/image.png") as any,
        overwrite: true
      }
    );


    // let {data: receipt} = await client.ShopReceipt.getShopReceipt(13201425, 2332707680, tokens);
    // let {data: shipment} = await client.ShopReceipt.createReceiptShipment(
    //   13201425,
    //   receipt.receipt_id,
    //   {
    //     carrier_name: "ups",
    //     send_bcc: false,
    //     tracking_code: "555015043133"
    //   },
    //   tokens
    // );

    console.log("Ping:", ping);
    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
    // console.log("Receipt:", receipt);
    // console.log("Shipment:", shipment);
  }
  catch (e) {
    console.error(e);
  }
})()

