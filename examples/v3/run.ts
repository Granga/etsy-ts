import * as fs from "fs-extra";
import { Etsy } from "../../src";
import { SecurityDataStorage } from "./SecurityDataStorage";

(async () => {
  try {
    const apiCredentials = await fs.readJSON("./examples/api-credentials.json");
    const client = new Etsy({
      apiKey: apiCredentials.apiKey,
      securityDataStorage: new SecurityDataStorage()
    });

    const etsyUserId = 92841371;

    let {data: ping} = await client.Other.ping();
    let {data: user} = await client.User.getUser(92841371, {etsyUserId});
    let {data: shop} = await client.Shop.getShopByOwnerUserId(user.user_id, {etsyUserId});
    let {data: {results: listings}} = await client.ShopListing.getListingsByShop({shopId: shop.shop_id}, {etsyUserId});

    // Upload image
    await client.ShopListingImage.uploadListingImage(
      13201425,
      listings[0].listing_id,
      {image: fs.createReadStream("./examples/image.png")},
      {etsyUserId}
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

